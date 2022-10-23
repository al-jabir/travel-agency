import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';

import styled from 'styled-components';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Nav>
      <div className='brand'>
        <img src={logo} alt='logo' />
      </div>
      <div className='toggle'></div>
      <div className='links'>
        <ul>
          <li>
            <a href='#service'>Services</a>
          </li>
          <li>
            <a href='#destination'>Destination</a>
          </li>
          <li>
            <a href='#offer'>Offers</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#tour'>Tour</a>
          </li>
        </ul>
      </div>
      <div className='account-info'>
        <div className='account'>
          <span>
            <BsPerson />
          </span>
          <span>My Account</span>
        </div>
        <div className='search'>
          <CiSearch />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
  padding: 0 2rem;
  .brand {
    img {
      cursor: pointer;
      width: 100px;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      display: flex;
      /* gap: 3rem; */
      li {
        margin: 0 10px;
        a {
          color: black;
          cursor: pointer;
          transition: var(--defaultTransition);
          &:hover {
            color: var(--primaryColor);
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    align-items: center;
    width: 190px;
    justify-content: center;
    height: 30px;
    border-radius: 5px;
    gap: 2rem;

    .account {
      display: flex;
      gap: 0.5rem;
    }
    .search {
      cursor: pointer;
    }
  }
`;
