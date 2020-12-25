import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020 Local Help</p>
        <nav>
          <ul className="footer__links">
            <li><a href="http://google.com" className=" footer__link">Телефон</a></li>
            <li><a href="http://google.com" className="footer__link">Почта</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
