import { useNavigation } from "@react-navigation/native";
import {
  ButtonsContainer,
  Container,
  ElementDown,
  ElementUp,
  Title,
} from "./styles";
import { Button } from "../../components/Button";

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
      <ElementUp />
      <Title>Wallet Test</Title>
      <ButtonsContainer>
        <Button onPress={handleWallet} title="meus cartões" type="PRIMARY" />
        <Button
          onPress={handleNewCard}
          title="cadastrar cartão"
          type="SECONDARY"
        />
      </ButtonsContainer>
      <ElementDown />
    </Container>
  );
};
