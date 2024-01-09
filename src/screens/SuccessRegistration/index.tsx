import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container, Subtitle, Title } from "./styles";
import { useCard } from "../../hooks/useCard";
import { useEffect } from "react";
import { Loading } from "../../components/Loading";
import { BackgroundElements } from "../../components/BackgroundElements";

export const SuccessRegistration = () => {
  const { cards, loadCardData, isLoadingCardStorageData } = useCard();
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate("wallet");
  };

  useEffect(() => {
    loadCardData();
  }, []);

  const lastCardRegistered = cards[cards.length - 1];

  if (isLoadingCardStorageData) return <Loading />;

  return (
    <Container>
      <BackgroundElements />
      <Title>Wallet Test</Title>
      <Subtitle>cartão cadastrado com sucesso</Subtitle>

      <Card
        title="Black Card"
        name={lastCardRegistered.name}
        number={lastCardRegistered.number}
        dueDate={lastCardRegistered.dueDate}
      />

      <Button onPress={handleNextPage} title="avançar" />
    </Container>
  );
};
