import { BackButton, Container, Title } from "./styles";
import BackIcon from "../../../../assets/icon-arrow-left";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.navigate("welcome");
  };
  return (
    <Container>
      <BackButton onPress={handleReturn}>
        <BackIcon />
      </BackButton>
      <Title>cadastro</Title>
    </Container>
  );
};
