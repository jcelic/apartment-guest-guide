import { Link } from 'react-router-dom';
import styles from './HomeCard.module.css';

const HomeCard = ({ icon, title, desc, to, onClick }) => {
  if (onClick && !to) {
    return (
      <button type="button" className={styles.card} onClick={onClick}>
        {icon}
        <h2>{title}</h2>
        <p>{desc}</p>
      </button>
    );
  }

  return (
    <Link to={to} className={styles.card}>
      {icon}
      <h2>{title}</h2>
      <p>{desc}</p>
    </Link>
  );
};

export default HomeCard;
