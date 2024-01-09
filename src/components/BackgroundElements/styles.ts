import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ElementUp = styled.View`
  position: absolute;

  top: -60px;
  left: -20%;

  z-index: 99;

  width: 350px;
  height: 235px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  opacity: 0.2;
  transform: rotate(-35deg);

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ElementDown = styled.View`
  position: absolute;

  bottom: -60px;
  right: -20%;

  z-index: 99;

  width: 350px;
  height: 235px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  opacity: 0.2;
  transform: rotate(-40deg);

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
