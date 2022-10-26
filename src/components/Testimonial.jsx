import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar.png';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';

const Testimonial = () => {
  return (
    <Section id='blog'>
      <div className='title'>
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className='testimonials'>
        <div className='testimonial-img-one'>
          <img src={testimonial1} alt='testi1' />
        </div>
        <div className='testimonial'>
          <div className='title'>
            <div className='image'>
              <img src={avatar} alt='avatar' />
            </div>
            <div className='info'>
              <h3>Jackson</h3>
              <span>Mern Stack Devoloper</span>
            </div>
          </div>
          <p className='des'>
            Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a briallant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className='testimonial-img-two'>
          <img src={testimonial2} alt='testi2' />
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
      border-top: 0.5rem solid var(--primaryColor);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primaryColor);
          }
        }
      }
      .des {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
`;
