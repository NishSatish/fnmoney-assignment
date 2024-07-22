import React, { useState } from 'react';
import styles from './Login.module.css';
import Navbar from '../components/Navbar';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleForms = (formType) => {
    if (formType === 'login') {
      setShowLogin(true);
      setShowSignup(false);
    } else if (formType === 'signup') {
      setShowLogin(false);
      setShowSignup(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${showLogin ? styles.active : ''}`}
            onClick={() => toggleForms('login')}
          >
            Login
          </button>
          <button
            className={`${styles.toggleButton} ${showSignup ? styles.active : ''}`}
            onClick={() => toggleForms('signup')}
          >
            Signup
          </button>
        </div>
        <div className={styles.forms}>
          {showLogin && (
            <form className={styles.form} onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <label>
                Username:
                <input type="text" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <button type="submit">Login</button>
            </form>
          )}
          {showSignup && (
            <form className={styles.form} onSubmit={handleSignupSubmit}>
              <h2>Signup</h2>
              <label>
                Username:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <button type="submit">Signup</button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};

export default Login;
