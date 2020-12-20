import React from 'react';

function CreateEvent() {
  return (
    <>
      <section className="creation-event">
        <h2 className="creation-event__title">Создайте мероприятие </h2>
        <form className="creation-event__form" name="">
          <p className="creation-event__label">Название мероприятия</p>
          <input
            type="text"
            value=""
            id=""
            name=""
            className="creation-event__input"
            minLength="2"
            maxLength="40"
            placeholder="Введите название мероприятия"
            required
          />

          <p className="creation-event__label">Организатор</p>
          <input
            type="text"
            value=""
            id=""
            name=""
            className="creation-event__input"
            minLength="2"
            maxLength="40"
            placeholder="Введите название мероприятия"
            required
          />

          <p className="creation-event__label">Введите ФИО организатора</p>
          <input
            className="creation-event__input"
            type="text"
            value=""
            id=""
            name=""
            minLength="2"
            maxLength="40"
            placeholder="Введите название мероприятия"
            required
          />

          <p className="creation-event__label">Дата проведения</p>
          <input
            type="date"
            value=""
            id=""
            name=""
            className="creation-event__input"
            minLength="2"
            maxLength="40"
            placeholder="Выберете дату"
            required
          />

          <p className="creation-event__label">Категория</p>
          <input
            list="list"
            name="browser"
            value=""
            id=""
            className="creation-event__input"
            minLength="2"
            maxLength="40"
            placeholder="Выберете категорию"
            required
          />
          {/* <datalist id="list"> */}
          {/* <option value="1"> */}
          {/*   <option value="2"> */}
          {/*     <option value="3"> */}
          {/* </datalist> */}

          <p className="creation-event__label">Адрес проведения</p>
          <input
            type="text"
            value=""
            id=""
            name=""
            className="creation-event__input"
            minLength="2"
            maxLength="40"
            placeholder="Введите адрес мероприятия"
            required
          />

          {/* <p className="creation-event__label"></p> */}
          <button type="submit" className="creation-event__submit">
            Создать мероприятие
          </button>
        </form>
      </section>
    </>
  );
}

export default CreateEvent;
