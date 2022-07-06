import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './Register.module.css';
import { useDispatch } from "react-redux";
import { register } from "services/auth-operations";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

    return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={s.form}>
                    <h1>Register page</h1>
        <label className={s.label}>
          Name
          <Field
            className={s.input}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={s.label}>
          Email
          <Field
            className={s.input}
            type="email"
            name="email"
            required
          />
                </label>
            <label className={s.label}>
          Password
          <Field
            className={s.input}
            type="password"
            name="password"
            required
          />
                </label>            
        <button className={s.btn} type="submit">Register
        </button>
      </Form>
    </Formik>      
    )
}

export default Register;