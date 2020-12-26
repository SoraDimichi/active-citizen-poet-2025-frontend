import React from 'react';

function CardFilter() {
  return (
    <section className="page-events">
      <h3 className="page-events__title">Мероприятия поблизости</h3>
      <nav>
        <ul className="page-events__content-info">
          <li className="page-events__column-links">Экология</li>
          <li className="page-events__column-links">Транспорт</li>
          <li className="page-events__column-links">Искусство</li>
          <li className="page-events__column-links">Животные</li>
        </ul>
      </nav>
    </section>
  );
}

export default CardFilter;
