import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Local Help</p>
      <nav>
        <ul className="footer__links">
          <li><a href="http://google.com" className=" footer__link">Телефон</a></li>
          <li><a href="http://google.com" className="footer__link">Почта</a></li>
        </ul>
      </nav>

    </footer>
  );
}

export default Footer;
