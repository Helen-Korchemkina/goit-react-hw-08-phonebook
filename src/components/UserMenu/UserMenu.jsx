import { useDispatch, useSelector } from 'react-redux';
import { FcLinux } from "react-icons/fc";
import s from './UserMenu.module.css';
import { getUserName } from 'redux/selectors';
import { logOut } from 'services/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <FcLinux className={s.avatar} />
          <span className={s.name}>Welkome, {name}</span>
      <button className={s.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}


export default UserMenu;

