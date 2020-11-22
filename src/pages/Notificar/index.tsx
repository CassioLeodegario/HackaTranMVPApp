import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
  Modal,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import ImagePicker from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
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
  ModalContainer,
  ModalButtonsContainer,
  ModalButton,
  ModalButtonText,
  VideoIconContainer,
} from './styles';

import api from '../../services/api';

import Button from '../../components/Button';

interface NotificacaoFormData {
  placa: string;
  tipoInfracao: string;
  descricao: string;
  caminhoArquivo: string;
  latitude: string;
  longitude: string;
}

const Notificar: React.FC = () => {
  const [carPicture, setCarPicture] = useState<any>(null);
  const [locale, setLocale] = useState({ latitude: '', longitude: '' });
  const [tempImg, setTempImg] = useState(carPng);
  const [showModal, setShowModal] = useState(false);
  const [tipoInfracao, setTipoInfracao] = useState('Avançou Sinal Vermelho');
  const placaInputRef = useRef<TextInput>(null);
  const tipoInfracaoInputRef = useRef<TextInput>(null);
  const breveDescricaoInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      info;
      setLocale({
        latitude: info?.coords?.latitude?.toString(),
        longitude: info?.coords?.longitude?.toString(),
      });
    });
  }, []);

  const handleSignUp = useCallback(
    async (data: NotificacaoFormData) => {
      data.latitude = locale.latitude;
      data.longitude = locale.longitude;
      try {
        data.caminhoArquivo = carPicture;
        data.tipoInfracao = tipoInfracao;
        await api
          .post('/infracao', data)
          .then(res => {
            console.log('ok');
          })
          .catch(error => console.log(error));

        navigation.navigate('Sucesso');
      } catch (err) {
        Alert.alert('Erro na criação', 'Ocorreu um erro ao enviar infração');
      }
    },
    [carPicture, locale, navigation, tipoInfracao],
  );

  const handleUpdateMedia = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione uma mídia',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar Câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao selecionar mídia.');
          return;
        }
        setTempImg(response.uri);
        setCarPicture(response.data);
      },
    );
  }, []);

  return (
    <>
      <Modal animationType="slide" transparent visible={showModal}>
        <ModalContainer>
          <SubTitle>Você confirma a veracidade dos fatos informados?</SubTitle>
          <ModalButtonsContainer>
            <ModalButton>
              <ModalButtonText
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Confirmar
              </ModalButtonText>
            </ModalButton>
            <ModalButton
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
          </ModalButtonsContainer>
        </ModalContainer>
      </Modal>

      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <View>
              <Title>Nova notificação de infração</Title>
            </View>
            <View>
              <SubTitle>
                Envie uma foto ou vídeo do veículo em infração
              </SubTitle>
            </View>
            <CarImageButton onPress={handleUpdateMedia}>
              <CarImage
                source={
                  typeof tempImg === 'string' ? { uri: tempImg } : tempImg
                }
              />
              <VideoIconContainer>
                <Icon name="video" color="#fff" size={18} />
              </VideoIconContainer>
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
              />
              <InputDescription>Tipo Infração</InputDescription>
              <Picker
                selectedValue={tipoInfracao}
                style={{
                  height: 50,
                  backgroundColor: '#fff',
                  borderBottomColor: '#dcdce9',
                  borderBottomWidth: 2,
                }}
                onValueChange={
                  (itemValue: any) => setTipoInfracao(itemValue)
                  // eslint-disable-next-line react/jsx-curly-newline
                }
              >
                <Picker.Item
                  label="Avançou Sinal Vermelho"
                  value="Avançou Sinal Vermelho"
                />
                <Picker.Item
                  label="Falando ao Celular"
                  value="Falando ao Celular"
                />
                <Picker.Item
                  label="Parado na Faixa de Pedestres"
                  value="Parado na Faixa de Pedestres"
                />
                <Picker.Item
                  label="Motociclista sem Capacete"
                  value="Motociclista sem Capacete"
                />
                <Picker.Item
                  label="Estacionado sobre a ciclovia"
                  value="Estacionado sobre a ciclovia"
                />
              </Picker>
              <InputDescription>Descrição</InputDescription>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                ref={breveDescricaoInputRef}
                name="descricao"
                placeholder="Insira uma breve descrição da infração"
              />

              <ButtonContainer>
                <Button onPress={() => setShowModal(true)}>Cadastrar</Button>
              </ButtonContainer>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Notificar;
