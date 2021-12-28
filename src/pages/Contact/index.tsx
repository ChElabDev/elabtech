import React from 'react';
import Header from '../../components/Header';
import NavMenu from '../../components/NavMenu';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Header />
      <NavMenu />
      <h1>Contact</h1>
    </Container>
  );
}

export default Contact;