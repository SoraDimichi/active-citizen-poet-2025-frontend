import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PopupSubmitEvent({ isOpen, onClose }) {
  return (
    <section className={`${isOpen ? 'popup_opened' : ''} popup`} name="popup">
      <div className="popup__container ">
        <img className="popup__images" src="https://images.unsplash.com/photo-1608228069492-3babaaba6f4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="#" />
        <h3 className="popup__title">Мероприятие создано</h3>
        <p className="popup__subtitle">Обработка займет несколько минут, после чего оно появится в общем списке мероприятий</p>
        <button type="button" onClick={onClose} className="submit creation-event__submit"><NavLink to="/">К мероприятию</NavLink></button>
      </div>
    </section>
  );
}
