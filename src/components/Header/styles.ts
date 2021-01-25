import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background: #fff;
  elevation: 10;
  margin-bottom: 20px;
  width: 100%;
  height: 59px;
  justify-content: center;
  align-self: center;
  z-index: 99;
`;

export const ContentImage = styled.Image`
  width: 53px;
  height: 34px;
  margin: auto;
  margin-top: 15px;
`;

export const Icon = styled(FeatherIcon)`
  /* padding-left: 16px;
    margin-bottom: 20px; */
  margin-right: auto;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: -16px;
`;

export const IconLogOut = styled(FeatherIcon)`
  /* padding-right: 16px;
    margin-bottom: 20px; */
  margin-left: auto;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
