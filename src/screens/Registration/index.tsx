import { Alert, ToastAndroid } from "react-native";
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
import { api } from "../../service/api";

import { AppError } from "../../utils/AppError";
import { useCard } from "../../hooks/useCard";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

// const schema = yup.object({
//   cardNumber: yup.string().required(),
//   cardName: yup.string().required(),
//   cardDuoDate: yup.string().required(),
//   cardCVV: yup.string().required(),
// });

type FormDataProps = {
  number: string;
  name: string;
  cvv: string;
  dueDate: string;
};

export const Registration = () => {
  const { control, handleSubmit } = useForm<FormDataProps>({
    // resolver: yupResolver(schema),
  });
  const { registerCard, isLoadingCardStorageData } = useCard();

  const navigation = useNavigation();

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
            render={({ field: { onChange } }) => (
              <Input
                keyboardType="numeric"
                onChangeText={onChange}
                placeholder="**** **** **** ****"
              />
            )}
          />

          <LabelInput>nome do titular do cartão</LabelInput>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input onChangeText={onChange} />
            )}
          />

          <SecurityContainer>
            <SecurityContent>
              <LabelInput>vencimento</LabelInput>
              <Controller
                control={control}
                name="dueDate"
                render={({ field: { onChange } }) => (
                  <Input
                    keyboardType="numeric"
                    onChangeText={onChange}
                    placeholder="00/00"
                  />
                )}
              />
            </SecurityContent>

            <SecurityContent>
              <LabelInput>código de segurança</LabelInput>
              <Controller
                control={control}
                name="cvv"
                render={({ field: { onChange } }) => (
                  <Input
                    keyboardType="numeric"
                    onChangeText={onChange}
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
