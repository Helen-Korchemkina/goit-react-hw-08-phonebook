import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { restart } from 'services/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <header>
        <Navbar className={s.header} bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="pb-navbar-nav" />
            <Nav>
              <Nav.Item as="ul">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.link
                  }
                >
                  Home
                </NavLink>
              </Nav.Item>
              {isLoggedIn && (
                <Nav.Item>
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? s.activeLink : s.link
                    }
                  >
                    Contacts
                  </NavLink>
                </Nav.Item>
              )}
              <div className={s.authnav}>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </div>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
