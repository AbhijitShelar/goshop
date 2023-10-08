import React from 'react'
import styled  from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" >
            <img src="./images/logo1.jpeg" alt='logo' />
        </NavLink>

    <Navbar/>


    </MainHeader>
  );
};


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
   height:5%;
  }
`;

export default Header
