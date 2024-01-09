import { useEffect } from "react";
import {
  CardContainer,
  CardContent,
  CardDetail,
  CardName,
  CardTitle,
  CardType,
} from "./styles";

type Props = {
  title: string;
  type?: CardType;
  name: string;
  number: string;
  dueDate: string;
};

export const Card = ({
  title,
  type = "BLACK CARD",
  name,
  number,
  dueDate,
  ...rest
}: Props) => {
  const formatCardNumber = (number: string) => {
    if (typeof number === "string" && number.length >= 4) {
      return "**** **** **** " + number.slice(-4);
    }
    return "Número inválido";
  };

  return (
    <CardContainer title={title} type={type}>
      <CardTitle>{type}</CardTitle>
      <CardName>{name}</CardName>
      <CardDetail>{formatCardNumber(number)}</CardDetail>
      <CardDetail>Validade {dueDate}</CardDetail>
    </CardContainer>
  );
};
