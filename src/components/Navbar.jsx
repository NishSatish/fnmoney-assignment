import { Link, Outlet } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to={'/'}>FNAXIOM</Link>
      </div>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/" className={styles.navLink}>About</a>
        <a href="/" className={styles.navLink}>Assessment Tasks</a>
        <a href="/" className={styles.navLink}>Contact</a>
      </div>
      <div className={styles.navLogin}>
          <Link to={'/login'}>
            <button className={styles.loginButton}>
              Login
            </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
