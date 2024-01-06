import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function Wallet() {
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.navigate("welcome");
  };

  const handleNewCard = () => {
    navigation.navigate("registration");
  };
  return (
    <View>
      <Text>Wallet</Text>
    </View>
  );
}
