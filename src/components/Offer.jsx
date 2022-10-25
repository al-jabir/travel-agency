import React from 'react';
import styled from 'styled-components';
import lighthouse from '../assets/lighthouse.png';
import OfferData from './OfferData';

const Offer = () => {
  return (
    <Section id='offer'>
      <div className='image'>
        <img src={lighthouse} alt='lightout' />
      </div>
      <div className='content'>
        <div className='title'>
          <h1>We are Offering in Total 998 Tours across the World</h1>
        </div>
        <div className='list'>
          {OfferData.map(({ id, icon, text, color }) => {
            return (
              <li key={id}>
                <div className={`icon ${color}`}>{icon}</div>
                <div className='text'>
                  <h3>{text}</h3>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Offer;

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;
  .image {
    img {
      height: 35rem;
    }
  }
  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
      }
    }
    .list {
      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 4rem 0;
        .icon {
          padding: 0.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }
        .red {
          background-color: #ff3010aa;
          color: white;
        }
        .green {
          background-color: #65ce5455;
          color: #65ce54;
        }
        .yellow {
          background-color: #ffc01e55;
          color: #ffc01e;
        }
      }
    }
  }
`;
