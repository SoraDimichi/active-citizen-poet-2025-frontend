import React from 'react';
import { useParams } from 'react-router-dom';

function Event({ events, onRegistration }) {
  const { id } = useParams();
  const currentEvent = events.find((ev) => ev._id === id);

  return (
    <>
      {currentEvent && (
      <section className="event">
        <img
          src={currentEvent.imageLink}
          className="event__image"
          alt="#"
        />
        <p className="event__title">{currentEvent.name}</p>
        <div className="event__line" />
        <p className="event__poem" dangerouslySetInnerHTML={{ __html: currentEvent.verse }} />
        <p className="event__address">{currentEvent.address}</p>
        <p className="event__date">{currentEvent.date}</p>
        <button type="button" className="event__button submit submit_type_wide" onClick={onRegistration}>Написать автору</button>
      </section>
      )}
    </>
  );
}

export default Event;

// <h3 className="event__author">{currentEvent.owner}</h3>
