import React from 'react';
import Header from '../../../components/Header';
import NavMenu from '../../../components/NavMenu'
import { Container } from './styles';

const Blog: React.FC = () => {
  return(
    <Container>
      <Header />
      <NavMenu />
      <h1>Blog</h1>
    </Container>
  );
}

export default Blog;