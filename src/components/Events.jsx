import React from 'react';
import Card from './Card';

function Events({ events }) {
  return (
    <>
      <section className="events">
        <h1 className="events__title">Добро творения в вашем  городе</h1>
        <ul className="events__cards">
          {events.map((event) => (
            <Card
              event={event}
              key={event._id}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Events;
