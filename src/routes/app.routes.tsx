import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../screens/Welcome";
import { Registration } from "../screens/Registration";
import { Wallet } from "../screens/Wallet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="registration" component={Registration} />
      <Screen name="wallet" component={Wallet} />
    </Navigator>
  );
}
