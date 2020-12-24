import React from 'react';
import { NavLink } from 'react-router-dom';
import heroLogo from '../images/main_picture.svg';
import arrow from '../images/arrow-down.svg';
import group from '../images/Group.svg';
import chart from '../images/chart.svg';

function Dashboard() {
  return (
    <>
      <section className="main">
        <div className="main__container">
          <h1 className="main__title">Сделай доброе дело!</h1>
          <p className="main__subtitle">Поможем друг другу на тяжелом пути к справедливости и равенству всех и вся в пределах нашего города!</p>
        </div>
        <img src={heroLogo} className="main__image" alt="mainImage" />
      </section>
      <section className="lead">
        <div className="lead__container">
          <img src={arrow} className="lead__image" alt="стрелка вниз" />
          <h1 className="lead__title">Выберите свой путь</h1>
        </div>
      </section>
      <section className="events">
        <NavLink
          to="/events"
          className="events__container"
        >
          <img src={group} className="events__image" alt="две персоны пускают самолетик" />
          <h3 className="events__title">Хочу помочь</h3>
          <p className="events__subtitle">Хотите помочь делом -- вам сюда.</p>
          <p className="events__subtitle">
            Тут вы сможете найти подходящие для себя вакансии
          </p>
          <form type="submit" className="events__submit">
            Хочу помочь
          </form>
        </NavLink>
        <NavLink to="/create-event" className="events__container">
          <img src={chart} className="events__image" alt="нарисованный человек показывает на график" />
          <h3 className="events__title">Создать мероприятие</h3>
          <p className="events__subtitle">Создайте свое мероприятие и найдите помощников.</p>
          <form type="submit" className="events__submit events__submit-color">
            Создать мероприятие
          </form>
        </NavLink>

      </section>
    </>
  );
}

export default Dashboard;
