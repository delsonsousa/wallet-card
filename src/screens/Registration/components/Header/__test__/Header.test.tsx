import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Header } from "../index";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../../../theme";

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe("Header Component", () => {
  const renderHeaderScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

  it("renders correctly", () => {
    const { getByText } = renderHeaderScreen();
    expect(getByText("cadastro")).toBeDefined();
  });

  it("navigates on back button press", () => {
    const { getByTestId } = renderHeaderScreen();
    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mockNavigate).toHaveBeenCalledWith("welcome");
  });
});
