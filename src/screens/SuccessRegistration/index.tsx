import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container, Subtitle, Title } from "./styles";

export const SuccessRegistration = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate("wallet");
  };

  return (
    <Container>
      <Title>Wallet Test</Title>
      <Subtitle>cartão cadastrado com sucesso</Subtitle>

      <Card title="Black Card" />

      <Button onPress={handleNextPage} title="avançar" />
    </Container>
  );
};
