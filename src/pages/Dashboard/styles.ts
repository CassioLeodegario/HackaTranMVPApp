import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Header = styled.View`
  padding-top: 30px;
  height: 130px;
  background: #0c3270;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  color: #ffff;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background: #f8f8f8;
  flex-direction: column;
  padding: 40px;
`;

export const MenuItems = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f8f8f8;
`;

export const MenuItem = styled(RectButton)`
  flex-basis: 47%;
  height: 150px;
  background: #f8f8f8;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
`;

export const UserNameContainer = styled.View`
  height: 80px;
  background: #f8f8f8;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserNameText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #0c3270;
`;

export const HeaderText = styled.Text`
  font-family: 'IndieFlower-Regular';
  transform: rotate(-7deg);
  font-size: 30px;
  color: #fff;
  align-self: center;
`;

export const MenuItemText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #0c3270;
`;
