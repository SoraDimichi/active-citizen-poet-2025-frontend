import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ event }) {
  const {
    _id = '',
    name = '',
    imageLink = '',
    address = '',
    date = '',
  } = event;

  return (
    <li className="card">
      <img
        src={imageLink}
        className="card__image"
        alt="#"
      />
      <NavLink className="card__lyrics" to={`event/${_id}`}>{name}</NavLink>
      <p className="card__address">{address}</p>
      <p className="card__date">{date}</p>
    </li>
  );
}

export default Card;
