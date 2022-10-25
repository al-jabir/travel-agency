import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <Section id='destination'>
      <div className='info'>
        <h2>
          Top <span>Destination</span> in the world
        </h2>
        <p>
          It is long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout from it
        </p>
        <Button text='Discover More' />
      </div>
      <div className='destinations'>
        {DestinationData.map(({ id, img, name }) => {
          return (
            <div className='destination' key={id}>
              <div className='image'>
                <img src={img} alt='desti' />
              </div>
              <div className='name'>
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Destination;

const Section = styled.section`
  display: flex;
  gap: 5rem;
  .info {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    h2 {
      font-size: 2rem;
      line-height: 3rem;
      span {
        color: var(--primaryColor);
      }
    }
    p {
      color: var(--secondaryText);
    }
  }
  .destinations {
    display: flex;
    flex: 2;
    gap: 2rem;
    .destination {
      position: relative;
      border-radius: 20px 0;
      overflow: hidden;
      img {
        height: 20rem;
      }
      .name {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, #ffffff14, #000000ae);
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin: 0 3rem 0.5rem 2rem;
          font-size: 1, 5rem;
          color: white;
        }
        &:hover {
          background: linear-gradient(to right, #f4f4f414, #b3b3b3ae);
          h3 {
            color: black;
          }
        }
      }
    }
  }
`;
