import { SafeAreaView } from "react-native-safe-area-context";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 25px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};

  position: relative;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE}px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 16px;
`;

export const FormContainer = styled.View`
  width: 100%;

  justify-content: start;
  align-items: flex-start;
`;

export const SecurityContainer = styled.View`
  flex-direction: row;
`;

export const SecurityContent = styled.View`
  width: 48.3%;
  margin-right: 12px;
`;

export const LabelInput = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 4px;

  text-align: left;
`;

export const Input = styled(TextInputMask)`
  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 6px;

  margin-bottom: 16px;

  padding-left: 16px;
  padding-right: 16px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 6px;

  margin-bottom: 16px;

  padding-left: 16px;
  padding-right: 16px;
`;
