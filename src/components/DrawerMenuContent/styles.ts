import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px 16px 10px;
  background: #fff;
  margin-top: 50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: 'IndieFlower-Regular';
  transform: rotate(-7deg);
  font-size: 30px;
  color: #0c3270;
  align-self: center;
  margin-bottom: 35px;
`;

export const UsertextContainer = styled.View`
  flex: 1;
`;

export const UserNameText = styled.Text`
  font-size: 15px;
  color: #27173e;
  font-family: 'RobotoSlab-Medium';
`;

export const UserIdText = styled.Text`
  font-size: 14px;
  color: #a9abad;
  font-family: 'RobotoSlab-Medium';
`;
