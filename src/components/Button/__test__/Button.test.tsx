import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../index";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";

describe("Button Component", () => {
  const renderButtonScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Button title="Click Me" onPress={mockOnPress} />
      </ThemeProvider>
    );

  const mockOnPress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly with given title", () => {
    const { getByText } = renderButtonScreen();
    expect(getByText("Click Me")).toBeTruthy();
  });

  test("triggers function on press", () => {
    const { getByText } = renderButtonScreen();
    const button = getByText("Click Me");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  test.each([
    ["PRIMARY", "primary-button"],
    ["SECONDARY", "secondary-button"],
  ])("applies %s type style", (type, testId) => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button title="Styled Button" type={type} />
      </ThemeProvider>
    );
    expect(getByTestId(testId)).toBeTruthy();
  });
});
