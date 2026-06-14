import { useTranslation } from 'react-i18next';
import {
  LuClock10,
  LuVolume1,
  LuCigaretteOff,
  LuLock,
  LuTriangleAlert,
} from 'react-icons/lu';
import styles from './HouseRules.module.css';
import InfoCard from '../../components/InfoCard/InfoCard';
import usePageTitle from '../../hooks/usePageTitle';

const HouseRules = () => {
  const { t } = useTranslation();
  usePageTitle(t('houseRules.title'));

  return (
    <div className={styles.rules}>
      <h1 className="pageTitle">{t('houseRules.title')}</h1>
      <h3 className="pageSubtitle">{t('houseRules.subtitle')}</h3>

      <h4>{t('houseRules.checkinTimesTitle')}</h4>

      <div className={styles.cards}>
        <InfoCard
          className="fullCard"
          icon={<LuClock10 />}
          title={t('houseRules.checkinCheckoutCardTitle')}
        >
          <p>
            {t('houseRules.checkinAfter')} <strong>14:00</strong>
            <br />
            {t('houseRules.checkoutBy')} <strong>10:00</strong>
            <br />
            <br />
            {t('houseRules.respectTimes')}
          </p>
        </InfoCard>
      </div>

      <h4>{t('houseRules.noiseTitle')}</h4>

      <div className={styles.cards}>
        <InfoCard
          className="fullCard"
          icon={<LuVolume1 />}
          title={t('houseRules.quietHoursTitle')}
        >
          <p>
            {t('houseRules.quietHoursIntro')}
            <br />
            <strong>14:00 – 16:00</strong>
            <br />
            <strong>23:00 – 07:00</strong>
            <br />
            <br />
            {t('houseRules.noiseText1')}
            <br />
            <br />
            {t('houseRules.noiseText2')}
          </p>
        </InfoCard>
      </div>

      <h4>{t('houseRules.apartmentRulesTitle')}</h4>

      <div className={styles.cards}>
        <InfoCard
          icon={<LuCigaretteOff />}
          title={t('houseRules.noSmokingTitle')}
        >
          <p>{t('houseRules.noSmokingText')}</p>
        </InfoCard>

        <InfoCard icon={<LuLock />} title={t('houseRules.lockDoorTitle')}>
          <p>{t('houseRules.lockDoorText')}</p>
        </InfoCard>

        <InfoCard
          icon={<LuTriangleAlert />}
          title={t('houseRules.reportDamagesTitle')}
        >
          <p>{t('houseRules.reportDamagesText')}</p>
        </InfoCard>
      </div>
    </div>
  );
};

export default HouseRules;
