import { useTranslation } from 'react-i18next';
import { MdErrorOutline } from 'react-icons/md';
import styles from './InvalidLink.module.css';

const InvalidLink = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon}>
          <MdErrorOutline />
        </span>

        <h1>{t('invalidLink.title')}</h1>

        <p>{t('invalidLink.description')}</p>

        <p className={styles.small}>{t('invalidLink.help')}</p>
      </div>
    </div>
  );
};

export default InvalidLink;
