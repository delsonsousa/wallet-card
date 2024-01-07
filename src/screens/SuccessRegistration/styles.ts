import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 30px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H4}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 30px;
`;
