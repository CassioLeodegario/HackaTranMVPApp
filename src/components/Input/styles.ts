import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 0 0;
  background: #f8f8f8;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-color: #dcdce9;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-bottom-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-bottom-color: #0c3270;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #27173e;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
`;
