import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} testID={`${type.toLowerCase()}-button`} {...rest}>
      <Title type={type} {...rest}>
        {title}
      </Title>
    </Container>
  );
}
