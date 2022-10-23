import React, { useState } from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.png';
import Button from './Button';

const Home = () => {
  const [price, setPrice] = useState('5,000tk - 10,000tk');
  return (
    <Section>
      <div className='background'>
        <img src={hero} alt='hero' />
      </div>
      <div className='content'>
        <div className='info'>
          <h1>It's Time To</h1>
          <h1>Explore the world</h1>
          <Button text='Plan Your Trip' />
        </div>
      </div>
      <div className='planner'>
        <form>
          <div className='row'>
            <label>Destinations</label>
            <select>
              <option>Sylhet</option>
              <option>Dhaka</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
          <div className='row'>
            <label>Check In</label>
            <input type='date' />
          </div>
          <div className='row'>
            <label>Price Range</label>
            <input
              type='text'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='row'>
            <Button text='Discover More' />
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
    img {
      width: 100%;
      height: 90vh;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
    }
  }
  .planner {
    position: absolute;
    bottom: -2rem;
    right: 0;
    background-color: white;
    padding: 2rem;
    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      .row {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 0.3rem;
        label {
          font-size: 0.9rem;
          color: var(--secondaryColor);
        }
        input,
        select {
          border: none;
          width: 100%;
          color: var(--primaryColor);
          margin-top: 0.5rem;
          background-color: white;
          font-size: 1.1rem;
          outline: none;
          border-bottom: 1px solid #f5ebe9;
          padding-bottom: 0.3rem;
        }
        select {
          text-align: center;
        }
        input[type='date']::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
            brightness(105%) contrast(101%);
        }
      }
    }
  }
`;
