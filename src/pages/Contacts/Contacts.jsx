import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getIsLoggedIn} from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './Contacts.module.css';

const Contacts = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
      <div className={s.container}>
        
   {!isLoggedIn && <h1 className={s.title}>
    Welcome to <span className={s.logo}>Phonebook</span>! <br /> <NavLink className={s.link} to="/register">Register  </NavLink> 
    or <NavLink className={s.link} to="/login">login</NavLink>, please.
    </h1>}
            
{ isLoggedIn && <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    <Toaster />
    </div>}
        
  </div>
)
}

export default Contacts;