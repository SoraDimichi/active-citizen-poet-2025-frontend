import React from 'react';
import { NavLink } from 'react-router-dom';
import Cat from '../images/Cat.svg';

export default function PopupConfirmation({ isOpen, onClose }) {
  return (
    <section className={`${isOpen ? 'popup_opened' : ''} popup`} name="popup">
      <div className="popup__container ">
        <img src={Cat} className="popup__images" alt="нарисованная кошка" />
        <h3 className="popup__title">Вы зарегистрировались на мероприятие</h3>
        <p className="popup__subtitle">Организатор получит ваши контакты и свяжется с вами для обсуждения деталей</p>
        <button type="button" onClick={onClose} className="submit creation-event__submit"><NavLink to="/events" className="submit__link">К добротворениям</NavLink></button>
      </div>
    </section>
  );
}
