import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signoutHandler = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to={'/'}>FNAXIOM</Link>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="#" className={styles.navLink}>About</Link>
        <Link to="#" className={styles.navLink}>Assessment Tasks</Link>
        <Link to="#" className={styles.navLink}>Contact</Link>
      </div>
      <div className={styles.navLogin}>
      {
            isLoggedIn &&
            <div className={styles.signout} onClick={signoutHandler}>Signout</div>
          }
          {
            !isLoggedIn &&
            <Link to={'/login'}>
              <button className={styles.loginButton}>
                Get Started
              </button>
            </Link>
          }
      </div>
      <div className={styles.navToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
