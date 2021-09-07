import React, { memo } from 'react';
import logo from '../../assets/images/equal-experts-logo-white-blue-background.png';
import { HeaderStyled } from './header.styled';

const Header = memo(() => {
  return (
    <HeaderStyled>
      <img src={logo} alt="[=]" />
      <h1>Grocery list</h1>
    </HeaderStyled>
  );
});

export default Header;
