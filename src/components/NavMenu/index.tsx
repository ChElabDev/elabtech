import React from 'react';

import {
  Container,
  NavList,
  NavItem,
  NavLink, } from './styles';

const NavMenu: React.FC = () => {
  return(
    <Container>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/testimonials">Testimonial</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact us</NavLink>
        </NavItem>
      </NavList>
    </Container>
  );
}

export default NavMenu;