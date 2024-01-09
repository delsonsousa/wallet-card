import styled from "styled-components/native";
import WalletIcon from "../../assets/icon-wallet";

export const Container = styled.View`
  flex: 1;

  position: relative;

  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const LoadIndicatorWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled(WalletIcon)`
  width: 100px;
  height: 100px;
`;
