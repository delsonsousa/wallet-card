import { StatusBar } from "react-native";
import { useFonts, PTSans_400Regular } from "@expo-google-fonts/pt-sans";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ PTSans_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
