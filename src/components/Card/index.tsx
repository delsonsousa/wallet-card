import { useEffect } from "react";
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

  const formatDueDate = (dueDate: string) => {
    // Verifica se a data é uma string e tem o comprimento esperado de 4 dígitos
    if (typeof dueDate === "string" && dueDate.length === 4) {
      // Insere uma barra "/" entre os dois primeiros e os dois últimos dígitos
      return dueDate.slice(0, 2) + "/" + dueDate.slice(2);
    }
    return "Data inválida";
  };

  return (
    <CardContainer title={title} type={type}>
      <CardTitle>{type}</CardTitle>
      <CardName>{name}</CardName>
      <CardDetail>{formatCardNumber(number)}</CardDetail>
      <CardDetail>Validade {formatDueDate(dueDate)}</CardDetail>
    </CardContainer>
  );
};
