import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImgBackgroundUp from "../../assets/img-background-up";
import ImgBackgroundDown from "../../assets/img-background-down";

export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const ElementUp = styled(ImgBackgroundUp)`
  position: absolute;
  top: -19%;
  left: -33%;
`;

export const ElementDown = styled(ImgBackgroundDown)`
  position: absolute;
  bottom: -73%;
  right: -33%;
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
