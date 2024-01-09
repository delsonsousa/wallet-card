import React from "react";
import { render, act } from "@testing-library/react-native";
import { Loading } from "../index";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";

describe("Loading Component", () => {
  const renderLoadingScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );

  it("renders correctly", () => {
    const { getByTestId } = renderLoadingScreen();

    expect(getByTestId("loading-container")).toBeDefined();

    expect(getByTestId("animated-load-indicator-wrapper")).toBeDefined();
  });

  it("renders with initial color", () => {
    const { getByTestId } = renderLoadingScreen();

    const loadIndicator = getByTestId("load-indicator");

    expect(loadIndicator.props.fill).toBe("none");
  });
});
