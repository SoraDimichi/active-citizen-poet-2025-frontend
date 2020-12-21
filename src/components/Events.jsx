import React from 'react';
import CardFilter from './CardFilter';
import Card from './Card';

function Events() {
  return (
    <>
      <CardFilter />

      <ul className="elements">
        <Card />
      </ul>
    </>
  );
}

export default Events;
