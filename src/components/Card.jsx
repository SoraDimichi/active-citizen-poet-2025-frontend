import React from 'react';

function Card() {
  // const { verse = '', link = '', address = '', date = '' } = event;

  return (
    <li className="card">
      <div className="card__imageContainer" />
      <div className="card__container">
        <img src="" className="card__icon" alt="" />
        <p className="card__topic">Экология</p>
      </div>

      <p className="card__lyrics">блаблабла</p>
      <p className="card__address">г. Москва, ул. Правды, д. 6</p>
      <p className="card__date">29 декабря 10:00 — 12:00</p>
    </li>
  );
}

export default Card;
