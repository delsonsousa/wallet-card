import React from "react";
import { render } from "@testing-library/react-native";
import { Card } from "../index";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";

describe("Card Component", () => {
  const renderCardScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Card
          title="Card"
          type="BLACK CARD"
          name="John Doe"
          number="123456789012"
          dueDate="12/24"
        />
      </ThemeProvider>
    );
  test("renders card details correctly", () => {
    const { getByText } = renderCardScreen();
    expect(getByText("BLACK CARD")).toBeTruthy();
    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("**** **** **** 9012")).toBeTruthy();
    expect(getByText("Validade 12/24")).toBeTruthy();
  });

  test("handles invalid number", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card
          title="Card"
          type="BLACK CARD"
          name="John Doe"
          number="2"
          dueDate="12/32"
        />
      </ThemeProvider>
    );
    expect(getByText(/Número inválido/)).toBeTruthy();
  });

  test.each([
    ["BLACK CARD", "BLACK CARD"],
    ["PLATINUM", "PLATINUM"],
  ])("renders %s type correctly", (type, expected) => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card
          title="Card"
          type={type}
          name="John Doe"
          number="123456789012"
          dueDate="1224"
        />
      </ThemeProvider>
    );
    expect(getByText(expected)).toBeTruthy();
  });
});
