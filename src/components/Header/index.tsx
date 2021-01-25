import React from 'react';
import { Container, ContentImage, Icon, IconLogOut } from './styles';
import logoImg from '../../assets/images/logo.png';

interface Props {
  icone1: string | '';
  icone2: string | '';
  onPress?: ((event: string) => void) | undefined;
}

const Header: React.FC<Props> = ({ icone1, icone2 }) => {
  return (
    <>
      <Container>
        <ContentImage source={logoImg} />
        <Icon name={icone1} size={20} color="#000" />
        <IconLogOut name={icone2} size={24} color="#000" />
      </Container>
    </>
  );
};

export default Header;
