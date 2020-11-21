import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Header,
  Content,
  UserNameContainer,
  UserNameText,
  HeaderButtons,
  Button,
  MenuItems,
  MenuItem,
  MenuItemText,
  HeaderText,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { navigate } = navigation;
  return (
    <Container>
      <Header>
        <HeaderButtons>
          <Button onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color="#fff" />
          </Button>
          <HeaderText>#euFiscalizo</HeaderText>
          <Button>
            <Icon name="mail" size={30} color="#fff" />
          </Button>
        </HeaderButtons>
      </Header>

      <Content>
        <UserNameContainer>
          <UserNameText>Olá, Cássio.</UserNameText>
          <Text>O que deseja fazer hoje?</Text>
        </UserNameContainer>
        <MenuItems>
          <MenuItem onPress={() => navigate('Notificar')}>
            <Icon name="thumbs-down" size={100} color="#0c3270" />
            <MenuItemText>Informar uma Infração</MenuItemText>
          </MenuItem>
          <MenuItem>
            <Icon name="list" size={100} color="#0c3270" />
            <MenuItemText>Infrações Anteriores</MenuItemText>
          </MenuItem>
          <MenuItem>
            <FAIcon name="car-crash" size={100} color="#0c3270" />
            <MenuItemText>Informar um acidente</MenuItemText>
          </MenuItem>
          <MenuItem>
            <Icon name="octagon" size={100} color="#0c3270" />
            <MenuItemText>Solicitar Sinalização</MenuItemText>
          </MenuItem>
        </MenuItems>
      </Content>
    </Container>
  );
};

export default Dashboard;
