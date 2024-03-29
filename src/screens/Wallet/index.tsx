import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonContainer,
  ButtonTitle,
  CardList,
  CardListEmpty,
  CardListScroll,
  Container,
  Header,
  NavButton,
  PageTitle,
  PageTitleContainer,
  Title,
  TitleEmpty,
} from "./styles";
import BackIcon from "../../assets/icon-arrow-left";
import PlusIcon from "../../assets/icon-plus";
import { StatusBar } from "react-native";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { useCard } from "../../hooks/useCard";
import { Loading } from "../../components/Loading";

export function Wallet() {
  const [cardSelected, setCardSelected] = useState(false);
  const navigation = useNavigation();
  const { isLoadingCardStorageData, loadCardData, cards } = useCard();

  const handleReturn = () => {
    navigation.navigate("welcome");
  };

  const handleNewCard = () => {
    navigation.navigate("registration");
  };

  useEffect(() => {
    loadCardData();
  }, []);

  if (isLoadingCardStorageData) return <Loading testID="loading-container" />;

  return (
    <Container>
      <StatusBar barStyle={"dark-content"} />
      <Header>
        <NavButton testID="back-button" onPress={handleReturn}>
          <BackIcon />
        </NavButton>
        <Title>Wallet Test</Title>
        <NavButton onPress={handleNewCard}>
          <PlusIcon />
        </NavButton>
      </Header>
      <PageTitleContainer>
        <PageTitle>Meus cartões</PageTitle>
      </PageTitleContainer>

      {cards.length === 0 ? (
        <CardListEmpty>
          <TitleEmpty>Nenhum cartão cadastrado</TitleEmpty>
          <Button title="Cadastrar Cartão" onPress={handleNewCard} />
        </CardListEmpty>
      ) : (
        <CardList>
          {cards.map((card) => (
            <Card
              key={card.number}
              title="Black Card"
              name={card.name}
              number={card.number}
              dueDate={card.dueDate}
            />
          ))}

          <ButtonContainer isCardSelected={cardSelected}>
            {cardSelected ? (
              <Button
                onPress={() => setCardSelected(!cardSelected)}
                title="pagar com este cartão"
              />
            ) : (
              <ButtonTitle onPress={() => setCardSelected(!cardSelected)}>
                usar este cartão
              </ButtonTitle>
            )}
          </ButtonContainer>
        </CardList>
      )}
    </Container>
  );
}
