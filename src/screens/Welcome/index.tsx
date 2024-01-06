import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function Welcome() {
  const navigation = useNavigation();

  const handleNewCard = () => {
    navigation.navigate("registration");
  };

  const handleWallet = () => {
    navigation.navigate("wallet");
  };
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
