import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScollToTop = () => {
  const [visible, setVisible] = useState(false);
  //   console.log(visible);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  }, [visible]);

  return (
    <Div>
      <a href='/' className={`${visible ? 'block' : 'none'}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
};

export default ScollToTop;

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--primaryColor);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;
