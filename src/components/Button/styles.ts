import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
  disabled?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  width: 100%;
  min-height: 55px;
  max-height: 55px;
  background-color: ${({ theme, type, disabled }) =>
    disabled
      ? theme.COLORS.GRAY_300
      : type === "PRIMARY"
      ? theme.COLORS.BLUE_300
      : theme.COLORS.GREEN_300};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type, disabled }) => css`
    font-size: ${theme.FONT_SIZE.H5}px;
    color: ${disabled
      ? theme.COLORS.GRAY_500
      : type === "PRIMARY"
      ? theme.COLORS.WHITE
      : theme.COLORS.BLUE_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
