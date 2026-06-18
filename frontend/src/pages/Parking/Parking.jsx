import { useTranslation } from 'react-i18next';
import { LuInfo } from 'react-icons/lu';

import usePageTitle from '../../hooks/usePageTitle';
import styles from './Parking.module.css';

const Parking = () => {
  const { t } = useTranslation();

  usePageTitle(t('parking.title'));

  return (
    <div className={styles.parking}>
      <h1 className="pageTitle">{t('parking.title')}</h1>
      <h3 className="pageSubtitle">{t('parking.subtitle')}</h3>

      <section className={styles.infoBox}>
        <LuInfo className={styles.icon} />

        <div>
          <h2>Parking information</h2>

          <p>
            Detailed parking instructions, photos and access information are
            available only to confirmed guests in the production version.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Parking;
