import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type ButtonContainerProps = {
  isCardSelected: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const Header = styled.View`
  width: 100%;
  padding: 70px 23.5px 13.5px 23.5px;
  margin-top: -56.5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

   shadowColor: #000;
  shadowOffset: { width: 0, height: 5 };
  shadowOpacity: 0.1;
  shadowRadius: 10px;
  elevation: 10; /* Apenas para Android */
`;

export const NavButton = styled.TouchableOpacity`
  width: 39px;
  height: 39px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H3}px;
  color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const PageTitleContainer = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 15px 0;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const PageTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H4}px;
  color: ${({ theme }) => theme.COLORS.BLUE_300};
`;

export const CardList = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 30px;
`;

export const CardListScroll = styled.ScrollView`
  width: 100%;
  overflow: hidden;
`;

export const CardListEmpty = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 30px;
`;

export const TitleEmpty = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.H4}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View<ButtonContainerProps>`
  width: 100%;
  margin-top: ${({ isCardSelected }) => (isCardSelected ? "100px" : "-20px")};

  justify-content: center;
  align-items: center;
`;

export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;

  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.P}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
