import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Posts {
  id: number;
  title: string;
  description: string;
  imagem: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const ContentFlat = styled(FlatList as new () => FlatList<Posts>)`
  /* width: 85%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    elevation: 10;
    padding-top: 30px;
    border-radius: 12px; */
`;

export const ButtonPost = styled.View`
  width: 85%;
  margin-bottom: 22px;
`;

export const ButtonCreate = styled.View`
  position: absolute;
  bottom: 50px;
  right: 45px;
  z-index: 100;
  background-color: #00dcb7;
  width: 57px;
  height: 57px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const BottonCreateText = styled.Text`
  width: 37px;
  height: 37px;
  border-color: #fff;
  border-width: 2px;
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
`;
