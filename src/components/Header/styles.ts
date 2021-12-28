import styled from 'styled-components';
import theme from '../../styles/Theme';

export const Container = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.background};
  padding: 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.white};
  letter-spacing: 1rem;
  align-self: center;
  font-family: ${theme.fonts.heading};
  text-transform: uppercase;
`;

export const Quote = styled.span`
  font-size: .8rem;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.text};
  align-self: flex-end;
  padding-right: 20%;
  text-decoration: italic;
`;

