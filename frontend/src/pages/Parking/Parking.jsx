import { useTranslation } from 'react-i18next';
import usePageTitle from '../../hooks/usePageTitle';
import styles from './Parking.module.css';

const Parking = () => {
  const { t } = useTranslation();

  usePageTitle(t('parking.title'));

  return (
    <div className={styles.parking}>
      <h1 className="pageTitle">{t('parking.title')}</h1>
      <h3 className="pageSubtitle">{t('parking.subtitle')}</h3>
    </div>
  );
};

export default Parking;
