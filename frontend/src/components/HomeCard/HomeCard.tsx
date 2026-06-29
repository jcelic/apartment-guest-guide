import { Link } from 'react-router-dom';
import styles from './HomeCard.module.css';

type HomeCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
};

const HomeCard = ({ icon, title, desc, to }: HomeCardProps) => {
  return (
    <Link to={to} className={styles.card}>
      {icon}
      <h2>{title}</h2>
      <p>{desc}</p>
    </Link>
  );
};

export default HomeCard;
