import React from 'react';
import Header from '../../../components/Header';
import NavMenu from '../../../components/NavMenu';

import { Container } from './styles';

const Products: React.FC = () => {
  return(
    <Container>
      <Header />
      <NavMenu />
      <h1>Products Home</h1>
    </Container>
  );
}

export default Products;