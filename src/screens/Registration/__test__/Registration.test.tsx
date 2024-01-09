import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import theme from "../../../theme";
import { Registration } from "../index";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: jest.fn(),
  Controller: jest.fn(({ render }) =>
    render({
      field: {
        onChange: jest.fn(),
        value: "",
        onBlur: jest.fn(),
        ref: jest.fn(),
      },
    })
  ),
}));

beforeEach(() => {
  useForm.mockReturnValue({
    handleSubmit: jest.fn(),
    control: {},
    formState: { errors: {} },
  });
});

jest.mock("../../../hooks/useCard.tsx", () => {
  return {
    useCard: () => ({
      registerCard: jest.fn().mockResolvedValue({ status: 201 }),
      isLoadingCardStorageData: false,
    }),
  };
});

jest.mock("styled-components", () => ({
  useTheme: () => ({ COLORS: { YELLOW: "yellow" } }),
}));

describe("Registration Component", () => {
  const renderRegistrationScreen = () =>
    render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Registration />
        </NavigationContainer>
      </ThemeProvider>
    );

  it("renders correctly", async () => {
    const { getByText, getByPlaceholderText } = renderRegistrationScreen();
    expect(getByText("Wallet Test")).toBeDefined();
    expect(getByPlaceholderText("**** **** **** ****")).toBeDefined();
  });

  it("handles form submission correctly", async () => {
    const mockNavigate = jest.fn();
    jest.mock("@react-navigation/native", () => {
      const actualNav = jest.requireActual("@react-navigation/native");
      return {
        ...actualNav,
        useNavigation: () => ({
          navigate: jest.fn(),
        }),
      };
    });

    const { getByText, getByPlaceholderText } = renderRegistrationScreen();

    const numberInput = getByPlaceholderText("**** **** **** ****");
    const nameInput = getByPlaceholderText("Insira o nome impresso no cartão");
    const dueDateInput = getByPlaceholderText("MM/AA");
    const cvvInput = getByPlaceholderText("***");

    fireEvent.changeText(numberInput, "1234 5678 9101 1121");
    fireEvent.changeText(nameInput, "John Doe");
    fireEvent.changeText(dueDateInput, "12/24");
    fireEvent.changeText(cvvInput, "123");

    fireEvent.press(getByText("avançar"));
  });
});
