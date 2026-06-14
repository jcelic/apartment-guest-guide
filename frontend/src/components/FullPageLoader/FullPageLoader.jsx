import { useTranslation } from 'react-i18next';
import styles from './FullPageLoader.module.css';

export default function FullPageLoader() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.spinner} />

        <h1>{t('loader.title')}</h1>

        <p>{t('loader.description')}</p>
      </div>
    </div>
  );
}
