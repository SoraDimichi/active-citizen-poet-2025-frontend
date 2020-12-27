import React from 'react';
import Card from './Card';

function Events({ events }) {
  return (
    <>
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
