import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import carPng from '../../assets/car.png';
import {
  Container,
  Title,
  InputDescription,
  SubTitle,
  CarImageButton,
  CarImage,
  PictureIconContainer,
  ButtonContainer,
  BackToDashboard,
  BackToDashboardText,
} from './styles';
import Button from '../../components/Button';

interface SignUpFormData {
  placa: string;
  tipoInfracao: string;
  breveDescricao: string;
  carPicture: string;
}

const Notificar: React.FC = () => {
  const [carPicture, setCarPicture] = useState<any>(null);
  const [tempImg, setTempImg] = useState(carPng);
  const placaInputRef = useRef<TextInput>(null);
  const tipoInfracaoInputRef = useRef<TextInput>(null);
  const breveDescricaoInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      navigation.navigate('Sucesso');
      return;
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          placa: Yup.string().required('Nome obrigatório'),
          tipoInfracao: Yup.string().required('Cpf obrigatório'),
          breveDescricao: Yup.string().required('Celular obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.carPicture = carPicture;
      } catch (err) {
        Alert.alert('Erro na criação', 'Ocorreu um erro ao enviar infração');
      }
    },
    [carPicture],
  );

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar Câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          console.log(response.error);
          Alert.alert('Erro ao atualizar seu avatar.');
          return;
        }
        setTempImg(response.uri);
        setCarPicture(response.data);
      },
    );
  }, []);

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <View>
              <Title>Nova notificação de infração</Title>
            </View>
            <View>
              <SubTitle>Envie a foto do veículo em infração</SubTitle>
            </View>
            <CarImageButton onPress={handleUpdateAvatar}>
              <CarImage
                source={
                  typeof tempImg === 'string' ? { uri: tempImg } : tempImg
                }
              />
              <PictureIconContainer>
                <Icon name="camera" color="#fff" size={18} />
              </PictureIconContainer>
            </CarImageButton>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <InputDescription>Placa</InputDescription>
              <Input
                autoCorrect={false}
                ref={placaInputRef}
                autoCapitalize="none"
                name="placa"
                placeholder="Informe a placa do veículo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  tipoInfracaoInputRef.current?.focus();
                }}
              />
              <InputDescription>Tipo Infração</InputDescription>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                ref={tipoInfracaoInputRef}
                name="tipoInfracao"
                placeholder="Selecione o tipo de infração"
                returnKeyType="next"
                onSubmitEditing={() => {
                  breveDescricaoInputRef.current?.focus();
                }}
              />
              <InputDescription>Descrição</InputDescription>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                ref={breveDescricaoInputRef}
                name="breveDescricao"
                placeholder="Insira uma breve descrição da infração"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <ButtonContainer>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Cadastrar
                </Button>
              </ButtonContainer>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Notificar;
