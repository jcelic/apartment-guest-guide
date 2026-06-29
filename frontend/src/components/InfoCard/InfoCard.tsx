import styles from './InfoCard.module.css';

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const InfoCard = ({ icon, title, children, className = '' }: InfoCardProps) => {
  const variantClass = className ? styles[className] : '';

  return (
    <div className={`${styles.card} ${variantClass}`}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
