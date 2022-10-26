import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Button from './Button';

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Destinations',
    'Latest Blog',
    'Our Team',
    'Contact',
  ];
  const supportLinks = [
    'Customer Support',
    'Privacy Policy',
    'Terms & Condition',
    'Forum',
    'Tour Guide',
  ];
  return (
    <Container>
      <div className='upper-footer'>
        <div className='col'>
          <div className='brand'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <p className='des'>
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul>
            <li>
              <span>+880 1725708935</span>
            </li>
            <li>
              <span>abc@gmail.com</span>
            </li>
            <li>
              <span>www.xxx.com</span>
            </li>
          </ul>
        </div>
        <div className='col'>
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className='col'>
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className='col'>
          <h2>Newsletter</h2>
          <div className='newsletter'>
            <input type='text' placeholder='Your Email' />
            <Button text='Subscribe Now' />
          </div>
        </div>
      </div>
      <div className='lower-footer'>
        <span>
          Copyright &copy; Travel. Design by <span className='t'>ajsoft</span>
        </span>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primaryColor);
    padding-bottom: 2rem;
    gap: 5rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondaryText);
      h2 {
        color: black;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--defaultTransition);
          &:hover {
            color: var(--primaryColor);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: white;
          background-color: #f8f8f8;
          cursor: pointer;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    .t {
      color: var(--primaryColor);
      font-weight: bold;
    }
  }

  @media screen and (min-width: 280px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;
