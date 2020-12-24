import React from 'react';
import { useParams } from 'react-router-dom';

function Event({ events }) {
  const { id } = useParams();

  const currentEvent = events.find((ev) => ev._id === id);

  const {
    verse = '',
    imageLink = '',
    address = '',
    date = '',
    type = '',
    name = '',
  } = currentEvent;

  return (
    <>
      {currentEvent && (
        <>
          <section className="intro">
            <img
              src={imageLink}
              className="intro__image"
              alt="#"
            />
          </section>
          <section className="description_event">
            <h3 className="card__author"> Аполлон Григорьев</h3>
            <p className="card__date">{date}</p>
            <p className="card__address">{address}</p>
            <div className="card__line" />
            <p className="card__lyrics">{name}</p>
            <div className="card__container">
              <img src="" className="card__icon" alt="" />
              <p className="card__topic">
                {type}
              </p>
            </div>
            <p className="card__poem">{verse}</p>

            <form>
              <button type="submit" className="submit submit__registration">Зарегистрироваться</button>
            </form>
          </section>
        </>
      )}
    </>
  );
}

export default Event;
