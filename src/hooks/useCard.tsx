import { useContext } from "react";

import { CardContext } from "../contexts/CardContext";

export const useCard = () => {
  const context = useContext(CardContext);

  return context;
};
