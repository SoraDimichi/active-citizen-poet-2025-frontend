import React from 'react';
import { NavLink } from 'react-router-dom';
// import headerLogo from '../images/logo_place_header.svg';
import headerLogo from '../images/logo_web.svg';

function Header() {
  return (
    <header className="header">
      <NavLink className="header__link" to="/">
        <img
          className="header__logo"
          src={headerLogo}
          alt="логотип яндекс практикума"
        />
      </NavLink>
    </header>
  );
}

export default Header;
