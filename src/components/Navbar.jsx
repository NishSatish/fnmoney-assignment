import { Link, Outlet } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <a href="/">FNAXIOM</a>
      </div>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/" className={styles.navLink}>About</a>
        <a href="/" className={styles.navLink}>Assessment Tasks</a>
        <a href="/" className={styles.navLink}>Contact</a>
      </div>
      <div className={styles.navLogin}>
        <button className={styles.loginButton}>
          <a href="/login">Login</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
