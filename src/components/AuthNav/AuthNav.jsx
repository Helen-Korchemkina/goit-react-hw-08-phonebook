import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div>
     <NavLink className={({ isActive }) => (isActive ? s.activeLink : s.link)} to="/register">Register</NavLink>
     <NavLink className={({ isActive }) => (isActive ? s.activeLink : s.link)} to="/login">Login</NavLink>
        </div>
    )
}

export default AuthNav;