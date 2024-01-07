import { useNavigation } from "@react-navigation/native";
import {
  ButtonContainer,
  ButtonTitle,
  CardList,
  Container,
  Header,
  NavButton,
  PageTitle,
  PageTitleContainer,
  Title,
  TransparentButton,
} from "./styles";

import BackIcon from "../../assets/icon-arrow-left";
import PlusIcon from "../../assets/icon-plus";
import { StatusBar } from "react-native";
import { Card } from "../../components/Card";
import { useState } from "react";
import { Button } from "../../components/Button";

export function Wallet() {
  const [cardSelected, setCardSelected] = useState(false);
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.navigate("welcome");
  };

  const handleNewCard = () => {
    navigation.navigate("registration");
  };

  return (
    <Container>
      <StatusBar barStyle={"dark-content"} />
      <Header>
        <NavButton onPress={handleReturn}>
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

      <CardList>
        <Card title="Black Card" />

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
    </Container>
  );
}
