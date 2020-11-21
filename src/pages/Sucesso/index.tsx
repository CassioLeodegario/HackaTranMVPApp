import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const Sucesso: React.FC = () => {
  const { reset } = useNavigation();
  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      new Date(),
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      { locale: ptBR },
    );
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#0c3270" />

      <Title>Infração informada com sucesso!</Title>
      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default Sucesso;
