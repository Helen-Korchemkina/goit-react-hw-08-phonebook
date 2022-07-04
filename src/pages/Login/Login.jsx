import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './Login.module.css';
import { useDispatch } from "react-redux";
import { logIn } from "services/auth-operations";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, {resetForm}) => {
    dispatch(logIn({ email, password }));
    resetForm();
  }

    return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h1>Login page</h1>
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
        <button className={s.btn} type="submit">Login
          {/* {isLoading ? <span>Loading...</span> : <span>Add contact</span>} */}
        </button>
      </Form>
    </Formik>      
    )
}

export default Login;