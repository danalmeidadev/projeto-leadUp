import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    font-family: 'Calibri';
    width: 100%;
    justify-content: center;
    text-align: center;
    border: 1px solid #00dcb7;
    color: #00dcb7;
    font-size: 18px;
    height: 43px;
    padding: 10px;
`;
