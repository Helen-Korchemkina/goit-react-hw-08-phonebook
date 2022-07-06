import React, { lazy, Suspense } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { useEffect } from 'react';
import { restart } from 'services/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restart());
  });

  return (
    <div className={s.form}>
      <header className={s.header}>
        <nav className={s.navigation}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/"
          >
            HomePage
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
        </nav>
        <div className={s.authnav}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicRoute restricted><HomePage /></PublicRoute>} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<PublicRoute restricted><Register/></PublicRoute> }  />
          <Route path="/login" element={<PublicRoute restricted><Login /></PublicRoute>}  />
          <Route path="*" element={<PublicRoute restricted><HomePage /></PublicRoute>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
