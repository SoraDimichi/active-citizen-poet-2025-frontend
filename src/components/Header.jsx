import React from 'react';
import headerLogo from '../images/logo_place_header.svg';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="логотип яндекс практикума"
      />
    </header>
  );
}

export default Header;
