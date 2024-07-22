import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <Link to={'/login'}>
          <button className={styles.loginButton}>
            Login
          </button>
        </Link>
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
