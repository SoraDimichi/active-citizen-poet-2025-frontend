import React from 'react';
import {
  Form,
  Formik,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

export default function CreateEvent({ onAddEvent }) {
  const avaliableMimeType = ['application/pdf', 'image/jpeg', 'image/png'];
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^(?:[а-яёА-ЯЁ]+\s+){3}[а-яёА-ЯЁ]+$|^(?:[а-яёА-ЯЁ]+\s+){2}[а-яёА-ЯЁ]+$|^(?:[а-яёА-ЯЁ]+\s+)[а-яёА-ЯЁ]+$|^[а-яёА-ЯЁ]+$/, 'Название должно быть на русском и не больше 4 слов')
      .required('Заполните это поле')
      .min(2, 'Название должно быть не короче двух символов')
      .max(40, 'Название не может быть длиннее 40 символов'),
    owner: Yup.string()
      .min(2, 'Имя должно быть не короче двух символов')
      .max(50, 'Имя не может быть длиннее 50 символов'),
    address: Yup.string()
      .min(10, 'Адрес должен быть не короче десяти символов')
      .max(100, 'Адрес не может быть длиннее 100 символов'),
    imageLink: Yup.string()
      .url(avaliableMimeType, 'Недопустимый тип файла'),
  });
  const initialValues = {
    name: '',
    imageLink: '',
    owner: '',
    date: '',
    address: '',
    type: '',
    verse: '',
  };
  const onSubmit = (values) => onAddEvent(values);
  return (
    <>
      <section className="creation-event">
        <h2 className="creation-event__title">Создайте добротворение </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="creation-event__form" name="">
            <p className="creation-event__label">Название добротворения</p>
            <Field
              type="text"
              id="name"
              name="name"
              className="creation-event__input"
              placeholder="Введите название мероприятия"
            />
            <ErrorMessage name="name" />
            <p className="creation-event__label">Категория</p>
            <Field
              name="type"
              as="select"
              id="type"
              className="creation-event__input"
            >
              <option hidden selected> Выберите категорию </option>
              <option value="Экология">Экология</option>
              <option value="Транспорт">Транспорт</option>
              <option value="Животные">Животные</option>
              <option value="Пожилые">Пожилые</option>
            </Field>
            <p className="creation-event__label">Организатор</p>
            <Field
              type="text"
              id="owner"
              name="owner"
              className="creation-event__input"
              placeholder="Введите ФИО организатора"
            />
            <ErrorMessage name="owner" />
            <p className="creation-event__label">Дата проведения</p>
            <Field
              type="date"
              id="date"
              name="date"
              className="creation-event__input"
              placeholder="Выберете дату"
            />
            <p className="creation-event__label">Адрес проведения</p>
            <Field
              type="text"
              id="address"
              name="address"
              className="creation-event__input"
              placeholder="Введите адрес мероприятия"
            />
            <ErrorMessage name="address" />
            <p className="creation-event__label">Изображение</p>
            <Field
              type="url"
              id="imageLink"
              name="imageLink"
              className="creation-event__input"
              placeholder="Выберете изображение"
            />
            <ErrorMessage name="imageLink" />
            <button type="submit" className="submit submit_type_wide submit_type_margin">
              Создать добротворение
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
}
