import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../../context/user';
import { auth } from '../../firebase/firebaseConfig';

import styles from './Header.module.css';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    auth.signOut();
    history.push('/sign-in-and-sign-up');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.navLink} to="/">
          <h1 className={styles.logoText}>RFAuth</h1>
        </Link>
        {user ? (
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/dashboard">
                {user.displayName}
              </Link>
            </li>
            <li className={styles.navItem} onClick={handleSignOut}>
              Logout
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;