import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Wallet } from "../index";
import { useCard } from "../../../hooks/useCard";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";

jest.mock("../../../hooks/useCard.tsx", () => ({
  useCard: jest.fn(),
}));

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe("Wallet Screen", () => {
  const renderWalletScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Wallet />
      </ThemeProvider>
    );
  beforeEach(() => {
    useCard.mockImplementation(() => ({
      isLoadingCardStorageData: false,
      loadCardData: jest.fn(),
      cards: [{ name: "Test Card", number: "1234", dueDate: "01/01/2024" }],
    }));
  });

  it("renders correctly", () => {
    const { getByText } = renderWalletScreen();
    expect(getByText("Meus cartões")).toBeTruthy();
  });

  it("displays the loading when the card data is loading", () => {
    useCard.mockImplementation(() => ({
      isLoadingCardStorageData: true,
      loadCardData: jest.fn(),
      cards: [],
    }));

    const { queryByTestId } = renderWalletScreen();

    const loadingContainer = queryByTestId("loading-container");
    expect(loadingContainer).not.toBeNull();
  });

  it("displays a message when there are no cards registered", () => {
    useCard.mockImplementation(() => ({
      isLoadingCardStorageData: false,
      loadCardData: jest.fn(),
      cards: [],
    }));

    const { getByText } = renderWalletScreen();
    expect(getByText("Nenhum cartão cadastrado")).toBeTruthy();
  });

  it("navigates to the card registration screen when the 'Register Card' button is clicked", () => {
    useCard.mockImplementation(() => ({
      isLoadingCardStorageData: false,
      loadCardData: jest.fn(),
      cards: [],
    }));

    const { getByText } = renderWalletScreen();
    fireEvent.press(getByText("Cadastrar Cartão"));
    expect(mockedNavigate).toHaveBeenCalledWith("registration");
  });

  it("calls handleReturn when NavButton is pressed", () => {
    const { getByTestId } = renderWalletScreen();

    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith("welcome");
  });

  it("toggles the card selection state", () => {
    const { getByText } = renderWalletScreen();

    const button = getByText("usar este cartão");
    expect(button).toBeTruthy();

    fireEvent.press(button);

    const newButton = getByText("pagar com este cartão");
    expect(newButton).toBeTruthy();
    fireEvent.press(newButton);
  });
});
