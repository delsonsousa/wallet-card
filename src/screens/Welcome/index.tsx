import { useNavigation } from "@react-navigation/native";
import { ButtonsContainer, Container, Title } from "./styles";
import { Button } from "../../components/Button";
import { BackgroundElements } from "../../components/BackgroundElements";

export const Welcome = () => {
  const navigation = useNavigation();

  const handleNewCard = () => {
    navigation.navigate("registration");
  };

  const handleWallet = () => {
    navigation.navigate("wallet");
  };
  return (
    <Container>
      <BackgroundElements />
      <Title>Wallet Test</Title>
      <ButtonsContainer>
        <Button onPress={handleWallet} title="meus cartões" type="PRIMARY" />
        <Button
          onPress={handleNewCard}
          title="cadastrar cartão"
          type="SECONDARY"
        />
      </ButtonsContainer>
    </Container>
  );
};
