import {
  CardContainer,
  CardDetail,
  CardName,
  CardTitle,
  CardType,
} from "./styles";

type Props = {
  title: string;
  type?: CardType;
};

export const Card = ({ title, type = "BLACK", ...rest }: Props) => {
  return (
    <CardContainer title={title} type={type}>
      <CardTitle>Black Card</CardTitle>
      <CardName>João Carlos Pereira</CardName>
      <CardDetail>**** **** **** 2345</CardDetail>
      <CardDetail>Validade 04/32</CardDetail>
    </CardContainer>
  );
};
