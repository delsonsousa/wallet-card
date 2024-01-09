import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";
import { Welcome } from "../index";

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe("Welcome Screen", () => {
  const renderWelcomeScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    );

  it("renders correctly", () => {
    const { getByText } = renderWelcomeScreen();
    expect(getByText("Wallet Test")).toBeDefined();
  });

  it("navigates to registration on new card button press", () => {
    const { getByText } = renderWelcomeScreen();
    const newCardButton = getByText("cadastrar cartão");
    fireEvent.press(newCardButton);
    expect(mockNavigate).toHaveBeenCalledWith("registration");
  });

  it("navigates to wallet on wallet button press", () => {
    const { getByText } = renderWelcomeScreen();
    const walletButton = getByText("meus cartões");
    fireEvent.press(walletButton);
    expect(mockNavigate).toHaveBeenCalledWith("wallet");
  });
});
