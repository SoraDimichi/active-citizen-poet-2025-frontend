import React from 'react';
import { NavLink } from 'react-router-dom';
import duck from '../images/duck.svg';

export default function PopupSubmitEvent({ isOpen, onClose }) {
  return (
    <section className={`${isOpen ? 'popup_opened' : ''} popup`} name="popup">
      <div className="popup__container ">
        <img src={duck} className="popup__images" alt="нарисованная утка" />
        <h3 className="popup__title">Мероприятие создано</h3>
        <p className="popup__subtitle">Обработка займет несколько минут, после чего оно появится в общем списке мероприятий</p>
        <button type="button" onClick={onClose} className="submit creation-event__submit"><NavLink to="/">К мероприятию</NavLink></button>
      </div>
    </section>
  );
}
