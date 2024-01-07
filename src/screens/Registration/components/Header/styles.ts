import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;

  width: 39px;
  height: 39px;

  z-index: 9;
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H3}px;
  color: ${({ theme }) => theme.COLORS.BLUE_300};
`;
