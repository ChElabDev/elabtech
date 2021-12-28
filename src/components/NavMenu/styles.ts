import styled from 'styled-components';
import theme from '../../styles/Theme';
import { Link } from 'react-router-dom';


export const Container = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.background};
`;
export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.size.large};
  &&:hover {
    color: ${theme.colors.quaternary};
    transition: 0.3s;
    text-transform: uppercase;
}
`;
