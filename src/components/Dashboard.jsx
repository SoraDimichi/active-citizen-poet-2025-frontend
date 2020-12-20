import React from 'react';
import { NavLink } from 'react-router-dom';
import heroLogo from '../images/photo-grid-atharva-tulsi.jpg';

function Dashboard() {
  return (
    <>
      <section className="main">
        <div className="main__container">
          <h1 className="main__title">Local Help</h1>
          <p className="main__subtitle">Поможем друг другу</p>
        </div>
        <img src={heroLogo} className="main__image" alt="mainImage" />
      </section>
      <section className="events">
        <NavLink
          to="/events"
          className="events__container"
        >
          <h3 className="events__title">Хочу помочь</h3>
          <p className="events__subtitle">Хотите помочь делом -- вам сюда.</p>
          <p className="events__subtitle">
            Тут вы сможете найти подходящие для себя вакансии
          </p>
        </NavLink>
        <NavLink to="/create-event" className="events__container">
          <h3 className="events__title">Создать мероприятие</h3>
          <p className="events__subtitle">Создайте свое мероприятие и найдите помощников.</p>
        </NavLink>

      </section>
    </>
  );
}

export default Dashboard;
