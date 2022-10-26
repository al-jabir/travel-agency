import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import styled from 'styled-components';

import ellipse from '../assets/ellipse.png';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import TourData from './TourData';

const Tours = () => {
  return (
    <Section id='tour'>
      <h2>Choose Your Destination</h2>
      <img src={ellipse} alt='ellipse' className='ellipse' />
      <div className='tours'>
        {TourData.map(({ id, img, title, price, reviews }, index) => {
          return (
            <div className='tour' key={id}>
              <div className='image'>
                <img src={img} alt='img' />
                {index === 1 && (
                  <div className='vectors'>
                    <img src={vector1} alt='vector1' className='vector1' />
                    <img src={vector2} alt='vector2' className='vector2' />
                  </div>
                )}
              </div>
              <div className='info'>
                <div className='details'>
                  <h4>{title}</h4>
                  <div className='details-price'>
                    <span className='price'>{price}</span>
                    <div className='reviews'>
                      <div className='stars'>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                      <span className='review'>{reviews}</span>
                    </div>
                  </div>
                </div>
                <button>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Tours;

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
        .vectors {
          .vector1 {
            position: absolute;
            height: 8rem;
            top: 0;
            left: -9rem;
          }
          .vector2 {
            position: absolute;
            height: 8rem;
            top: 0;
            right: -8rem;
          }
        }
      }
      .info {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        bottom: -30px;
        right: 0;
        gap: 1rem;
        padding: 1rem;
        box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
        button {
          padding: 0.5rem 0.7rem;
          background-color: var(--primaryColor);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .details-price {
            display: flex;
            gap: 1rem;
            .price {
              color: var(--primaryColor);
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .stars {
                svg {
                  color: #ffc01e;
                }
              }
              .review {
                color: var(--secondaryText);
              }
            }
          }
        }
      }
    }
  }
`;
