import React, { useContext, useEffect, useState } from "react";
import {
  render,
  act,
  renderHook,
  waitFor,
} from "@testing-library/react-native";
import { CardContext, CardContextProvider } from "../CardContext";
import { api } from "../../service/api";
import { Alert } from "react-native";

jest.mock("react-native", () => ({
  Alert: { alert: jest.fn() },
}));

jest.mock("../../service/api");

describe("CardContext", () => {
  it("has the correct initial state", () => {
    const { result } = renderHook(() => useContext(CardContext), {
      wrapper: CardContextProvider,
    });

    expect(result.current.cards).toEqual([]);
    expect(result.current.isLoadingCardStorageData).toBe(false);
  });

  it("registers a card successfully", async () => {
    const newCard = { id: 2, name: "New Card" };
    api.post.mockResolvedValueOnce({ status: 201, data: newCard });

    const { result } = renderHook(() => useContext(CardContext), {
      wrapper: CardContextProvider,
    });

    act(() => {
      result.current.registerCard(newCard);
    });

    await waitFor(() => {
      expect(result.current.cards).toContain(newCard);
      expect(result.current.isLoadingCardStorageData).toBe(false);
    });
  });

  it("loads cards successfully", async () => {
    const mockCards = [{ id: 1, name: "Card 1" }];
    api.get.mockResolvedValueOnce({ data: mockCards });

    const { result } = renderHook(() => useContext(CardContext), {
      wrapper: CardContextProvider,
    });

    act(() => {
      result.current.loadCardData();
    });

    await waitFor(() => {
      expect(result.current.cards).toEqual(mockCards);
      expect(result.current.isLoadingCardStorageData).toBe(false);
    });
  });

  it("handles error on card registration", async () => {
    const error = new Error("Network error");
    api.post.mockRejectedValueOnce(error);

    const { result } = renderHook(() => useContext(CardContext), {
      wrapper: CardContextProvider,
    });

    act(() => {
      result.current.registerCard({ id: 3, name: "Error Card" });
    });

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        "Não foi possível cadastrar o cartão. Tente novamente mais tarde."
      );
      expect(result.current.isLoadingCardStorageData).toBe(false);
    });
  });

  it("handles error while loading cards", async () => {
    const errorMessage = "Network error";
    api.get.mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useContext(CardContext), {
      wrapper: CardContextProvider,
    });

    act(() => {
      result.current.loadCardData();
    });

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        "Não foi possível carregar os cartões na sua wallet. Tente novamente mais tarde."
      );
      expect(result.current.isLoadingCardStorageData).toBe(false);
    });
  });
});
