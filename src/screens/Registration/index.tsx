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
  TextInput,
  Title,
} from "./styles";
import { Header } from "./components/Header";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import { useCard } from "../../hooks/useCard";
import { Loading } from "../../components/Loading";
import { useTheme } from "styled-components";
import { BackgroundElements } from "../../components/BackgroundElements";

const schema = yup.object({
  number: yup
    .string()
    .required("Número do cartão é obrigatório")
    .matches(
      /(\d{4} ){3}\d{4}/,
      "Número do cartão deve ter 16 dígitos com espaço a cada 4 números"
    ),
  name: yup
    .string()
    .required("Nome é obrigatório")
    .matches(/^[A-Za-z ]+$/, "Nome deve conter apenas letras"),
  dueDate: yup
    .string()
    .required("Data de vencimento é obrigatória")
    .matches(/\d{2}\/\d{2}/, "Data de vencimento deve estar no formato MM/YY")
    .test("dueDate", "Data de vencimento inválida", (value) => {
      const [month, year] = value.split("/").map(Number);
      return month >= 1 && month <= 12 && year >= 24;
    }),
  cvv: yup
    .string()
    .required("CVV é obrigatório")
    .matches(/\d{3}/, "CVV deve ter 3 dígitos"),
});

type FormDataProps = {
  number: string;
  name: string;
  cvv: string;
  dueDate: string;
};

export const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { registerCard, isLoadingCardStorageData } = useCard();

  const navigation = useNavigation();

  const theme = useTheme();

  const handleRegisterNewCard = async ({
    number,
    name,
    cvv,
    dueDate,
  }: FormDataProps) => {
    const body = {
      number,
      name,
      cvv,
      dueDate,
    };
    try {
      const status = await registerCard(body);
      if (status === 201) navigation.navigate("successRegistration");
    } catch (error) {
      throw error;
    }
  };

  if (isLoadingCardStorageData) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Wallet Test</Title>

        <FormContainer>
          <LabelInput>número do cartão</LabelInput>
          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, value } }) => (
              <Input
                type={"custom"}
                options={{
                  mask: "9999 9999 9999 9999",
                }}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
                placeholder="**** **** **** ****"
                testID="name-input"
                style={{
                  borderColor: errors.number && theme.COLORS.YELLOW,
                  borderWidth: errors.number && 2,
                }}
              />
            )}
          />

          <LabelInput>nome do titular do cartão</LabelInput>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Insira o nome impresso no cartão"
                style={{
                  borderColor: errors.name && theme.COLORS.YELLOW,
                  borderWidth: errors.name && 2,
                }}
              />
            )}
          />

          <SecurityContainer>
            <SecurityContent>
              <LabelInput>vencimento</LabelInput>
              <Controller
                control={control}
                name="dueDate"
                render={({ field: { onChange, value } }) => (
                  <Input
                    type={"custom"}
                    options={{
                      mask: "99/99",
                    }}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                    placeholder="MM/AA"
                    testID="dueDate-input"
                    style={{
                      borderColor: errors.dueDate && theme.COLORS.YELLOW,
                      borderWidth: errors.dueDate && 2,
                    }}
                  />
                )}
              />
            </SecurityContent>

            <SecurityContent>
              <LabelInput>código de segurança</LabelInput>
              <Controller
                control={control}
                name="cvv"
                render={({ field: { onChange, value } }) => (
                  <Input
                    type={"custom"}
                    options={{
                      mask: "999",
                    }}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                    placeholder="***"
                    testID="cvv-input"
                    style={{
                      borderColor: errors.cvv && theme.COLORS.YELLOW,
                      borderWidth: errors.cvv && 2,
                    }}
                  />
                )}
              />
            </SecurityContent>
          </SecurityContainer>
        </FormContainer>

        <Button
          title="avançar"
          disabled={Object.keys(errors).length > 0}
          onPress={handleSubmit(handleRegisterNewCard)}
        />
      </Content>
    </Container>
  );
};
