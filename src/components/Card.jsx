import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ event }) {
  const {
    _id = '',
    verse = '',
    imageLink = '',
    address = '',
    date = '',
    type = '',
  } = event;

  return (
    <li className="card">
      <div style={{ backgroundImage: `url('${imageLink}')` }} className="card__imageContainer" />
      <div className="card__container">
        <img src="" className="card__icon" alt="" />
        <p className="card__topic">{type}</p>
      </div>
      <NavLink className="card__lyrics" to={`event/${_id}`}>{verse}</NavLink>
      <p className="card__address">{address}</p>
      <p className="card__date">{date}</p>
    </li>
  );
}

export default Card;
