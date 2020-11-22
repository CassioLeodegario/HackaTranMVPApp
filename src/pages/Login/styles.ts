import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? 40 : 60}px 30px;
`;

export const HeaderText = styled.Text`
  font-family: 'IndieFlower-Regular';
  transform: rotate(-7deg);
  font-size: 40px;
  color: #0c3270;
  align-self: center;
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #27173e;
  font-family: 'RobotoSlab-Medium';
  margin: -30px 0 10px 0;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #27173e;
  font-family: 'RobotoSlab-Medium';
  margin: 0px 0 30px 0;
`;

export const ForgotPassword = styled.TouchableOpacity`
  padding: 16px;
`;

export const ForgotPasswordText = styled.Text`
  color: #cdcde9;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
`;

export const NewUser = styled.TouchableOpacity`
  padding: 16px;
`;

export const NewUserText = styled.Text`
  color: #2f8592;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const ButtonContainer = styled.View`
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const ButtonsView = styled.View`
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputDescription = styled.Text`
  color: #27173e;
  align-self: flex-start;
  font-family: 'RobotoSlab-Regular';
`;
