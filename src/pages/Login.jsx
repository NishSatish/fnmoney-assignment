import React, { useState } from 'react';
import styles from './Login.module.css';
import Navbar from '../components/Navbar';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});

  const toggleForms = (formType) => {
    if (formType === 'login') {
      setShowLogin(true);
      setShowSignup(false);
    } else if (formType === 'signup') {
      setShowLogin(false);
      setShowSignup(true);
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!loginData.username) errors.username = 'Username is required';
    if (!loginData.password) errors.password = 'Password is required';
    return errors;
  };

  const validateSignup = () => {
    const errors = {};
    if (!signupData.username) errors.username = 'Username is required';
    if (!signupData.email) errors.email = 'Email is required';
    if (!signupData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    console.log(signupData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const errors = validateLogin();
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      if (response.status !== 200) {
        setLoginErrors({error: 'Something wrong'});
        throw new Error('invalid credentials');
      }
      const result = await response.json();
      console.log(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("uname", result.username);
      setLoginData({});
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignup();
    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      return;
    }
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });
      if (response.status !== 201) {
        setSignupErrors({error: 'Something wrong'});
        throw new Error('account exists');
      }
      setSignupData({});
      setShowLogin(true);
      setShowSignup(false);
    } catch (error) {
      console.error('Error:', error);
    }
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
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  className={styles.input}
                />
                {loginErrors.username && <p className={styles.error}>{loginErrors.username}</p>}
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className={styles.input}
                />
                {loginErrors.password && <p className={styles.error}>{loginErrors.password}</p>}
              </label>
              <button type="submit" className={styles.submitButton}>Login</button>
              {loginErrors.error && <p className={styles.error}>{loginErrors.error}</p>}
            </form>
          )}
          {showSignup && (
            <form className={styles.form} onSubmit={handleSignupSubmit}>
              <h2>Signup</h2>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  className={styles.input}
                />
                {signupErrors.username && <p className={styles.error}>{signupErrors.username}</p>}
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className={styles.input}
                />
                {signupErrors.email && <p className={styles.error}>{signupErrors.email}</p>}
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  className={styles.input}
                />
                {signupErrors.password && <p className={styles.error}>{signupErrors.password}</p>}
              </label>
              <button type="submit" className={styles.submitButton}>Signup</button>
              {signupErrors.error && <p className={styles.error}>{signupErrors.error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
