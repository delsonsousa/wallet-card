import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import { useCard } from "../../../hooks/useCard";
import { useNavigation } from "@react-navigation/native";
import { SuccessRegistration } from "../index";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components/native";

jest.mock("../../../hooks/useCard.tsx");
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("SuccessRegistration Component", () => {
  const renderSuccessRegistrationScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <SuccessRegistration />
      </ThemeProvider>
    );
  const mockNavigate = jest.fn();
  const mockLoadCardData = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useNavigation.mockImplementation(() => ({ navigate: mockNavigate }));
    useCard.mockImplementation(() => ({
      cards: [{ name: "John Doe", number: "1234", dueDate: "10/24" }],
      loadCardData: mockLoadCardData,
      isLoadingCardStorageData: false,
    }));
  });

  test("renders loading state initially", () => {
    useCard.mockImplementation(() => ({
      cards: [],
      loadCardData: jest.fn(),
      isLoadingCardStorageData: true,
    }));
    const { getByTestId } = renderSuccessRegistrationScreen();
    expect(getByTestId("loading-container")).toBeTruthy();
  });

  test("loads card data on mount", () => {
    renderSuccessRegistrationScreen();
    expect(mockLoadCardData).toHaveBeenCalled();
  });

  test("displays last registered card", async () => {
    const { findByText } = renderSuccessRegistrationScreen();
    expect(await findByText(/John Doe/)).toBeTruthy();
    expect(await findByText(/\*\*\*\* \*\*\*\* \*\*\*\* 1234/)).toBeTruthy();
    expect(await findByText("Validade 10/24")).toBeTruthy();
  });

  test("navigates to wallet on button press", () => {
    const { getByText } = renderSuccessRegistrationScreen();
    const button = getByText("avançar");
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith("wallet");
  });
});
