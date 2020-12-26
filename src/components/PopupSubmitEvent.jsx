import React from 'react';
import duck from '../images/duck.svg';

export default function PopupSubmitEvent({ isOpen }) {
  return (
    <form className={`${isOpen ? 'popup_opened' : ''} popup`} name="popup">
      <div className="popup__container ">
        <img src={duck} className="popup__images" alt="нарисованная утка" />
        <h3 className="popup__title">Мероприятие создано</h3>
        <p className="popup__subtitle">Обработка займет несколько минут, после чего оно появится в общем списке мероприятий</p>
        <button type="submit" className="submit creation-event__submit"> К мероприятию</button>
      </div>
    </form>
  );
}
