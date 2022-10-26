import React from 'react';
import styled from 'styled-components';
import ServiceData from './ServiceData';

const Services = () => {
  return (
    <Section id='service'>
      <div className='services'>
        {ServiceData.map(({ id, img, title, des }) => {
          return (
            <div className='service' key={id}>
              <img src={img} alt='card-service' />
              <h3>{title}</h3>
              <p>{des}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  margin: 8rem 2rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background: var(--cardGrey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primaryText);
      }
      p {
        color: var(--secondaryText);
      }
      img {
        width: 128px;
        height: 128px;
      }
      transition: var(--defaultTransition);
      &:hover {
        background: white;
        box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
     {
      .services {
        grid-template-columns: 1fr;
      }
    }
  }
`;
