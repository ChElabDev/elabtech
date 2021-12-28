import React from 'react';
import Logo from '../../assets/logo.png';
import { 
  Container,
  Image,
  TextContainer,
  Text,
  Quote,
} from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Image src={Logo} alt="" />
      <TextContainer>
        <Text data-text="E-Lab Tech">E-Lab Tech</Text>
        <Quote>Aqui descomplicamos a tecnologia! </Quote>
      </TextContainer>
     
    </Container>
  );
}

export default Header;