import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: var(--primaryColor);
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  border: 1px solid var(--primaryColor);
  transition: var(--defaultTransition);
  &:hover {
    background: transparent;
    color: black;
  }
`;
