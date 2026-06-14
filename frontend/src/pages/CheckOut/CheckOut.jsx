import { FaWhatsapp } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import InfoCard from '../../components/InfoCard/InfoCard';
import styles from './CheckOut.module.css';
import {
  LuClock10,
  LuSnowflake,
  LuLightbulb,
  LuCircleParking,
  LuDoorClosed,
  LuKeyRound,
  LuMessageCircle,
  LuSquare,
} from 'react-icons/lu';
import usePageTitle from '../../hooks/usePageTitle';
import { useParams } from 'react-router-dom';
import { useGuideSecrets } from '../../hooks/useGuideSecrets';

const CheckOut = () => {
  const { token } = useParams();
  const { t } = useTranslation();
  usePageTitle(t('checkout.title'));

  const { data } = useGuideSecrets(token);

  const leaveWhatsappText = encodeURIComponent(t('checkout.whatsappLeaveText'));

  return (
    <div className={styles.checkOut}>
      <h1 className="pageTitle">{t('checkout.title')}</h1>
      <h3 className="pageSubtitle">{t('checkout.subtitle')}</h3>

      <div className={styles.cards}>
        <InfoCard
          className="highlightCard"
          icon={<LuClock10 />}
          title={t('checkout.checkoutTimeTitle')}
        >
          <p>
            <span className={styles.checkoutTime}>10:00</span>
            {t('checkout.checkoutTimeText')} <strong>10:00</strong>{' '}
            {t('checkout.checkoutTimeReason')}
          </p>
        </InfoCard>

        <InfoCard icon={<LuSnowflake />} title={t('checkout.turnOffAcTitle')}>
          <p>{t('checkout.turnOffAcText')}</p>
        </InfoCard>

        <InfoCard icon={<LuSquare />} title={t('checkout.closeWindowsTitle')}>
          <p>{t('checkout.closeWindowsText')}</p>
        </InfoCard>

        <InfoCard
          icon={<LuLightbulb />}
          title={t('checkout.turnOffLightsTitle')}
        >
          <p>{t('checkout.turnOffLightsText')}</p>
        </InfoCard>

        <InfoCard
          icon={<LuCircleParking />}
          title={t('checkout.parkingCardTitle')}
        >
          <p>{t('checkout.parkingCardText')}</p>
        </InfoCard>

        <InfoCard icon={<LuDoorClosed />} title={t('checkout.lockDoorTitle')}>
          <p>{t('checkout.lockDoorText')}</p>
        </InfoCard>

        <InfoCard icon={<LuKeyRound />} title={t('checkout.returnKeyTitle')}>
          <p>{t('checkout.returnKeyText')}</p>
        </InfoCard>

        <InfoCard
          className="highlightCard"
          icon={<LuMessageCircle />}
          title={t('checkout.leaveMessageTitle')}
        >
          <p>{t('checkout.leaveMessageText')}</p>

          <a
            href={`https://wa.me/${data?.host_phone}?text=${leaveWhatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FaWhatsapp /> {t('common.messageUsOnWhatsApp')}
          </a>
        </InfoCard>
      </div>
    </div>
  );
};

export default CheckOut;
