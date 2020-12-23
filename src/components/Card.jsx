import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

function Card({ event }) {
  const { url } = useRouteMatch();

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
      <Link className="card__lyrics" to={`${url}/${_id}`}>{verse}</Link>
      <p className="card__address">{address}</p>
      <p className="card__date">{date}</p>
    </li>
  );
}

export default Card;
