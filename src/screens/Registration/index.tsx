import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  FormContainer,
  Input,
  LabelInput,
  SecurityContainer,
  SecurityContent,
  Title,
} from "./styles";
import { Header } from "./components/Header";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

// const schema = yup.object({
//   cardNumber: yup.string().required(),
//   cardName: yup.string().required(),
//   cardDuoDate: yup.string().required(),
//   cardCVV: yup.string().required(),
// });

export const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const handleRegisterNewCard = () => {
    navigation.navigate("successRegistration");
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Wallet Test</Title>

        <FormContainer>
          <LabelInput>número do cartão</LabelInput>
          <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                keyboardType="numeric"
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="**** **** **** ****"
              />
            )}
          />

          <LabelInput>nome do titular do cartão</LabelInput>
          <Controller
            control={control}
            name="cardName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input value={value} onChangeText={onChange} onBlur={onBlur} />
            )}
          />

          <SecurityContainer>
            <SecurityContent>
              <LabelInput>vencimento</LabelInput>
              <Controller
                control={control}
                name="cardDueDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="00/00"
                  />
                )}
              />
            </SecurityContent>

            <SecurityContent>
              <LabelInput>código de segurança</LabelInput>
              <Controller
                control={control}
                name="cardCVV"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="***"
                  />
                )}
              />
            </SecurityContent>
          </SecurityContainer>
        </FormContainer>

        <Button title="avançar" onPress={handleSubmit(handleRegisterNewCard)} />
      </Content>
    </Container>
  );
};
