import styles from './Activity.module.css';

const Activity = ({title, desc}) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.cta}>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default Activity;