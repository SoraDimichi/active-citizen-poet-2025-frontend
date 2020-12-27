import React from 'react';
import CardFilter from './CardFilter';
import Card from './Card';

function Events({ events }) {
  return (
    <>
      <CardFilter />
      <ul className="elements">
        {events.map((event) => (
          <Card
            event={event}
            key={event._id}
          />
        ))}
      </ul>
    </>
  );
}

export default Events;
