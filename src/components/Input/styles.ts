import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-top-color: 0;
  border-left-color: 0;
  border-right-color: 0;
  border-bottom-color: #00dcb7;

  ${props =>
    props.isFocused &&
    css`
      border-color: red;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'Calibri';
  ${props =>
    props.isFocused &&
    css`
      border-color: red;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
