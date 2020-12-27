import React from 'react';
import { useParams } from 'react-router-dom';

function Event({ events }) {
  const { id } = useParams();
  const currentEvent = events.find((ev) => ev._id === id);

  return (
    <>
      {currentEvent && (
        <>
          <section className="intro">
            <img
              src={currentEvent.imageLink}
              className="intro__image"
              alt="#"
            />
          </section>
          <section className="description_event">
            <h3 className="card__author">{currentEvent.owner}</h3>
            <p className="card__date">
              (
              {currentEvent.date}
              )
            </p>
            <p className="card__address">{currentEvent.address}</p>
            <div className="card__line" />
            <p className="card__lyrics">{currentEvent.name}</p>
            <p className="card__poem">{currentEvent.verse}</p>

            <form>
              <button type="submit" className="submit submit_type_wide">Зарегистрироваться</button>
            </form>
          </section>
        </>
      )}
    </>
  );
}

export default Event;
