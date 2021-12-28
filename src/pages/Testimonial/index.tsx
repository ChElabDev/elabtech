import React from 'react';
import Header from '../../components/Header';
import NavMenu from '../../components/NavMenu';


import { Container } from './styles';

const Testimonial: React.FC = () => {
  return(
    <Container>
      <Header />
      <NavMenu />
      <h1> Testimonial </h1>
    </Container>
    
  );
}

export default Testimonial;