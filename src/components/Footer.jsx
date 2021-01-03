import React from 'react';
import telegramLogo from '../images/telegram-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Добротворение</p>
      <a href="http://telegram.org" className="footer__socLink">
        <img
          className="footer__socLinkLogo"
          src={telegramLogo}
          alt="иконка телеграм"
        />
        dobrotvorenie
      </a>
    </footer>
  );
}

export default Footer;
