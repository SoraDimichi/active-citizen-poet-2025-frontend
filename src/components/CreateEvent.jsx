import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateEvent(onAddEvent) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Название должно быть не короче двух символов')
      .max(50, 'Название не может быть длиннее 50 символов')
      .required('Заполните это поле'),
    owner: Yup.string()
      .min(2, 'Имя должно быть не короче двух символов')
      .max(50, 'Имя не может быть длиннее 50 символов')
      .required('Заполните это поле'),
    address: Yup.string()
      .min(10, 'Адрес должен быть не короче десяти символов')
      .max(100, 'Адрес не может быть длиннее 100 символов')
      .required('Заполните это поле'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      owner: '',
      date: '',
      address: '',
      type: '',
    },
    onSubmit: (values) => onAddEvent(values),
    validationSchema,
  });
  console.log(formik.values);
  return (
    <>
      <section className="creation-event">
        <h2 className="creation-event__title">Создайте мероприятие </h2>
        <form className="creation-event__form" name="" onSubmit={formik.handleSubmit}>
          <p className="creation-event__label">Название мероприятия</p>
          <input
            type="text"
            value={formik.values.name}
            id="name"
            name="name"
            className="creation-event__input"
            placeholder="Введите название мероприятия"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <p className="creation-event__label">Организатор</p>
          <input
            type="text"
            value={formik.values.owner}
            id="owner"
            name="owner"
            className="creation-event__input"
            placeholder="Введите название мероприятия"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.owner && formik.errors.owner ? <div>{formik.errors.owner}</div> : null}

          <p className="creation-event__label">Дата проведения</p>
          <input
            type="date"
            value={formik.values.date}
            id="date"
            name="date"
            className="creation-event__input"
            placeholder="Выберете дату"
            onChange={formik.handleChange}
          />
          <p className="creation-event__label">Адрес проведения</p>
          <input
            type="text"
            value={formik.values.address}
            id="address"
            name="address"
            className="creation-event__input"
            placeholder="Введите адрес мероприятия"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address
            ? <div>{formik.errors.address}</div> : null}

          <button type="submit" className="creation-event__submit">
            Создать мероприятие
          </button>
        </form>
      </section>
    </>
  );
}
