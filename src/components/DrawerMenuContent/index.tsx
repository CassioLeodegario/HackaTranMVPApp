import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import {
  Container,
  Header,
  HeaderText,
  UserIdText,
  UserNameText,
  UsertextContainer,
} from './styles';

const DrawerMenuContent: React.FC = (props: any) => {
  return (
    <Container>
      <Header>
        <UsertextContainer>
          <HeaderText>#euFiscalizo</HeaderText>
          <UserNameText>CASSIO DA SILVA LEODEGARIO PEREIRA</UserNameText>
          <UserIdText>CPF: 078.996.585-15</UserIdText>
        </UsertextContainer>
      </Header>
    </Container>
  );
};

export default DrawerMenuContent;
