import React from 'react';
import { useParams } from 'react-router-dom';

function Event({ events }) {
  const { id } = useParams();
  console.log(events);
  console.log(id);
  const currentEvent = events.find((ev) => ev._id === id);
  console.log(currentEvent);
  return (
    <>
    </>
  );
}

export default Event;
