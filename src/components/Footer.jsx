import React from 'react';
import telephoneLogo from '../images/telephone_icon.svg';
import letterLogo from '../images/letter_icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020 Local Help</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a href="http://google.com" className="footer__link">
                <img
                  className="footer__logo"
                  src={telephoneLogo}
                  alt="логотип телефона"
                />
                +7 446 666 00 11
              </a>
            </li>
            <li>
              <a href="http://google.com" className="footer__link">
                <img
                  className="footer__logo"
                  src={letterLogo}
                  alt="логотип телефона"
                />
                yandex@yandex.ru
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
