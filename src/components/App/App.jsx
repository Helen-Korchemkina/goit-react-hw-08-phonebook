import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login'; 
import s from './App.module.css';
import { useSelector } from 'react-redux';
import {getIsLoggedIn} from 'redux/selectors';

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
  <div className={s.form}>
    <header className={s.header}>
          <nav className={s.navigation}>
      <NavLink className={({ isActive }) => (isActive ? s.activeLink : s.link)}
 to="/contacts">Contacts</NavLink>
      </nav>
      <div className={s.authnav}>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </div> 
      </header>

    <Routes>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Contacts />} />
    </Routes>
   
  </div>
);
}

export default App;



