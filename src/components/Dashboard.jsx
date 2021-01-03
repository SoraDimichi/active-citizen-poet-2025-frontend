import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImage from '../images/main_picture.svg';
import arrowDown from '../images/arrow-down.svg';
import group from '../images/Group.svg';
import chart from '../images/chart.png';

function Dashboard() {
  return (
    <div className="main">
      <section className="hero">
        <h1 className="hero__title">Сделай добро творение!</h1>
        <p className="hero__subtitle">
          Поможем друг другу на тяжелом пути к справедливости и
          равенству всех и вся в пределах нашего города!
        </p>
        <img src={heroImage} className="hero__mainImage" alt="Добрая женщина подбирает юношу на дороге" />
        <img src={arrowDown} className="hero__arrowImage" alt="Стрелка вниз" />
      </section>
      <section className="choices">
        <h2 className="choices__title">Выберите свой путь</h2>
        <div className="choice">
          <img src={group} className="choice__image_withGirls choice__image" alt="две персоны пускают самолетик" />
          <h3 className="choice__title">Хочу помочь</h3>
          <p className="choice__subtitle">Хотите помочь делом вам сюда.</p>
          <NavLink className="choice__button submit" to="/events" type="button">
            Хочу помочь
          </NavLink>
        </div>
        <div className="choice">
          <img src={chart} className="choice__image_withGuy choice__image" alt="нарисованный человек показывает на график" />
          <h3 className="choice__title">Создать добротворение</h3>
          <p className="choice__subtitle">Создайте свое мероприятие и найдите помощников.</p>
          <NavLink className="choice__button submit submit_type_red_color" to="/create-event" type="button">
            Создать добротворение
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
