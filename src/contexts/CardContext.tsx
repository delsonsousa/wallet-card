import { ReactNode, createContext, useEffect, useState } from "react";
import { CardDTO } from "../dtos/CardDTO";

import { api } from "../service/api";
import { Alert } from "react-native";
import { AppError } from "../utils/AppError";

export type CardContextDataProps = {
  cards: CardDTO[];
  registerCard: (card: CardDTO) => Promise<number | undefined>;
  loadCardData: () => Promise<void>;
  isLoadingCardStorageData: boolean;
};

type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContext = createContext<CardContextDataProps>(
  {} as CardContextDataProps
);

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [cards, setCards] = useState<CardDTO[]>([]);
  const [isLoadingCardStorageData, setIsLoadingCardStorageData] =
    useState(false);

  const registerCard = async (cards: CardDTO) => {
    try {
      setIsLoadingCardStorageData(true);
      const { status, data } = await api.post("/cards", cards);

      if (status === 201) {
        setCards((currentCards) => [...currentCards, data]);
      }
      return status;
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível cadastrar o cartão. Tente novamente mais tarde.";

      Alert.alert(title);
    } finally {
      setIsLoadingCardStorageData(false);
    }
  };

  const loadCardData = async () => {
    try {
      setIsLoadingCardStorageData(true);

      const response = await api.get("/cards");
      setCards(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os cartões na sua wallet. Tente novamente mais tarde.";

      Alert.alert(title);
    } finally {
      setIsLoadingCardStorageData(false);
    }
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        registerCard,
        loadCardData,
        isLoadingCardStorageData,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
