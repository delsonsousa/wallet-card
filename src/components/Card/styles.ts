import styled from "styled-components/native";

export type CardType = "BLACK" | "GREEN";

type CardProps = {
  type: CardType;
};

export const CardContainer = styled.View<CardProps>`
  width: 100%;
  padding: 30px 15px 45px;
  margin-bottom: 30px;

  background-color: ${({ theme, type }) =>
    type === "BLACK" ? theme.COLORS.BLACK : theme.COLORS.GREEN_300};

  /* TODO */
  /* filter: drop-shadow(0, 2px, 6px, 0, rgba(0, 0, 0, 0.25)); */

  border-radius: 16px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H5}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 34px;
`;

export const CardName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.P}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 3px;
`;

export const CardDetail = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 2px;
`;
