import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  SubTitle,
  ButtonsView,
  NewUserText,
  NewUser,
  InputDescription,
  ButtonContainer,
  HeaderText,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    console.log('handeling sign in');
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório'),
        // .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      navigation.navigate('Dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Title',
        'Ocorreu um erro ao fazer login, cheque as credenciais e tente novamente',
      );
    }
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <HeaderText>#euFiscalizo</HeaderText>
            <View>
              <Title>Entrar</Title>
            </View>
            <View>
              <SubTitle>Digite seu CPF ou E-mail</SubTitle>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <InputDescription>CPF ou E-mail</InputDescription>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <InputDescription>Senha</InputDescription>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <ButtonContainer>
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Entrar
                </Button>
              </ButtonContainer>

              <ButtonsView>
                <NewUser
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                >
                  <NewUserText>Novo Cadastro</NewUserText>
                </NewUser>

                <ForgotPassword
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}
                >
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
              </ButtonsView>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
