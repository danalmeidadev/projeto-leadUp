import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ContentImage = styled.View`
  flex: 1;
  margin-bottom: 150px;
`;
