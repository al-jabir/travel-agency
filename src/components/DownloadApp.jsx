import React from 'react';
import styled from 'styled-components';

import appStore from '../assets/appleStore.png';
import googlePlay from '../assets/googlePlay.png';
import screens from '../assets/screens.png';

const DownloadApp = () => {
  return (
    <Section>
      <div className='info'>
        <h1>Download Now Travel Community Apps</h1>
        <div className='downloads'>
          <img src={googlePlay} alt='googlePlay' />
          <img src={appStore} alt='appStore' />
        </div>
      </div>
      <img src={screens} alt='screens' className='screens' />
    </Section>
  );
};

export default DownloadApp;

const Section = styled.section`
  height: 25rem;
  width: 100%;
  margin: 5rem 0;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    position: absolute;
    height: 22rem;
    right: 1rem;
    bottom: -2rem;
  }
`;
