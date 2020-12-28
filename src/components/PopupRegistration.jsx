import React from 'react';
import {
  Form,
  Formik,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

export default function PopupRegistration({ isOpen, onConfirmation }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Имя должно быть не короче двух символов')
      .max(50, 'Имя не может быть длиннее 50 символов')
      .required('Заполните это поле'),
    email: Yup.string()
      .min(10, 'Адрес должен быть не короче десяти символов')
      .max(100, 'Адрес не может быть длиннее 100 символов')
      .required('Заполните это поле'),
    telephone: Yup.string()
      .required('Заполните это поле'),
  });
  const initialValues = {
    name: '',
    email: '',
    telephone: '',
  };

  return (
    <section className={`${isOpen ? 'popup_opened' : ''} popup`} name="popup">
      <div className="popup__container popup__container_registration">
        <h3 className="popup__title">Регистрация</h3>
        <p className="popup__subtitle">Оставьте свои контакты и организатор мероприятия свяжется с вами</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="creation-event__form" name="">
            <p className="creation-event__label">Имя и фамилия</p>
            <Field
              type="text"
              id="name"
              name="name"
              className="creation-event__input"
              placeholder="Введите ваше имя"
            />
            <ErrorMessage name="name" />
            <p className="creation-event__label">Электронная почта</p>
            <Field
              type="email"
              id="email"
              name="email"
              className="creation-event__input"
              placeholder="Введите ваш email"
            />
            <ErrorMessage name="email" />
            <p className="creation-event__label">Номер телефона</p>
            <Field
              type="text"
              id="telephone"
              name="telephone"
              className="creation-event__input"
              placeholder="Введите ваш телефон"
            />
            <ErrorMessage name="telephone" />
            <button type="button" onClick={onConfirmation} className="submit creation-event__submit">Отправить</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
