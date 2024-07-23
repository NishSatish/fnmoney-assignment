import { Link } from 'react-router-dom';
import Activity from '../components/Activity';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

const ACTIVITIES = [
  {
    title: 'Coding Challenge',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Project Submission',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Project Quiz',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Live Assessment',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
];

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heading}>
          Welcome to FnAxiom 
          <br />
          Full Stack Internship
        </div>

        <div className={styles.cta}>
          {
            isLoggedIn &&
            <div className={styles.uname}>{localStorage.getItem("uname")}</div>
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

        <div className={styles.activities}>
          {
            ACTIVITIES.map(act => (
              <Activity key={act.title} title={act.title} desc={act.desc}/>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default Home;