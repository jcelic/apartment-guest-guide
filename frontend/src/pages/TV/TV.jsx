import { useTranslation } from 'react-i18next';
import styles from './TV.module.css';

import {
  IoPlayCircleOutline,
  IoInformationCircleOutline,
  IoTvOutline,
} from 'react-icons/io5';
import { IoIosPower } from 'react-icons/io';

import InfoCard from '../../components/InfoCard/InfoCard';
import usePageTitle from '../../hooks/usePageTitle';

const TV = () => {
  const { t } = useTranslation();

  usePageTitle(t('tv.title'));

  return (
    <div className={styles.tv}>
      <h1 className="pageTitle">{t('tv.title')}</h1>
      <h3 className="pageSubtitle">{t('tv.subtitle')}</h3>

      <div className={styles.steps}>
        <InfoCard
          className="sideCard"
          icon={<IoIosPower />}
          title={t('tv.turnOn.title')}
        >
          <p>{t('tv.turnOn.text')}</p>

          <button type="button" className={styles.photoBtn}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          className="sideCard"
          icon={<IoPlayCircleOutline />}
          title={t('tv.streaming.title')}
        >
          <p>{t('tv.streaming.text')}</p>
        </InfoCard>

        <InfoCard
          className="sideCard"
          icon={<IoTvOutline />}
          title={t('tv.channels.title')}
        >
          <p>{t('tv.channels.text')}</p>
        </InfoCard>

        <InfoCard className="sideCard" icon={<IoInformationCircleOutline />}>
          <p>{t('tv.remote.text')}</p>
        </InfoCard>
      </div>
    </div>
  );
};

export default TV;
