import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  position: relative;

  align-items: center;
  justify-content: center;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  height: 170px;
  gap: 20px;
  padding: 20px 14px;

  flex-direction: column;
`;
