import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Arrival.module.css';
import { FiMapPin } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import placeholderImg from '../../assets/placeholder-img.png';
import { PiPathFill, PiDoor } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa6';
import { LuLock, LuLockOpen } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

import usePageTitle from '../../hooks/usePageTitle';
import { useGuideSecrets } from '../../hooks/useGuideSecrets';

const Arrival = () => {
  const { token } = useParams();
  const { t } = useTranslation();

  usePageTitle(t('arrival.title'));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [showEntranceCode, setShowEntranceCode] = useState(false);
  const [showLockboxCode, setShowLockboxCode] = useState(false);

  const { data, isLoading, error } = useGuideSecrets(token);

  const buildingCode = data?.building_door_code;
  const lockboxCode = data?.lockbox_code;

  const entrancePathSlides = [
    {
      src: placeholderImg,
      description: t('arrival.entrancePathDescription'),
    },
  ];

  const apartmentSlides = [
    {
      src: placeholderImg,
      description: t('arrival.apartmentSlidesDescription'),
    },
  ];

  const lockboxSlides = [
    {
      src: placeholderImg,
      description: t('arrival.lockboxSlidesDescription'),
    },
  ];

  const arrivalWhatsappText = encodeURIComponent(
    t('arrival.whatsappArrivalText'),
  );

  const openLightbox = (slidesArray) => {
    setSlides(slidesArray);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.arrival}>
      <h1 className="pageTitle">{t('arrival.title')}</h1>
      <h3 className="pageSubtitle">{t('arrival.subtitle')}</h3>

      <div className={styles.checkinBox}>
        <strong>{t('arrival.checkinLabel')}</strong> {t('arrival.checkinText')}{' '}
        <strong>14:00</strong>. {t('arrival.earlyReady')}
      </div>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=44.110961663034544,15.237250440308197&travelmode=driving"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.hero}>
          <span className={styles.mapBadge}>
            <FiMapPin /> {t('common.openInGoogleMaps')}
          </span>
        </div>
      </a>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span>01</span>
            {t('arrival.enterBuilding')}
          </h3>

          <p className={styles.cardText}>
            <FiMapPin /> {t('arrival.address')}
          </p>

          <p className={styles.cardText}>{t('arrival.entranceText')}</p>

          <div className={styles.cardActions}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=44.110961663034544,15.237250440308197&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <FiMapPin /> {t('common.openInGoogleMaps')}
            </a>

            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => openLightbox(entrancePathSlides)}
            >
              <PiPathFill className={styles.pathIcon} />
              {t('arrival.viewEntrancePath')}
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => setShowEntranceCode((prev) => !prev)}
              disabled={isLoading || Boolean(error)}
            >
              {isLoading ? (
                <Spinner />
              ) : !showEntranceCode ? (
                <>
                  <LuLock />
                  {t('arrival.showEntranceCode')}
                </>
              ) : (
                <>
                  <LuLockOpen />
                  {buildingCode || '-'}
                </>
              )}
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span>02</span>
            {t('arrival.findApartment')}
          </h3>

          <p className={styles.cardText}>
            {t('arrival.apartmentLocationText')}
          </p>

          <div className={styles.cardActions}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => openLightbox(apartmentSlides)}
            >
              <PiDoor className={styles.door} />
              {t('arrival.viewApartmentLocation')}
            </button>

            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => openLightbox(lockboxSlides)}
            >
              <LuLock />
              {t('arrival.viewLockbox')}
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => setShowLockboxCode((prev) => !prev)}
              disabled={isLoading || Boolean(error)}
            >
              {isLoading ? (
                <Spinner />
              ) : !showLockboxCode ? (
                <>
                  <LuLock />
                  {t('arrival.showLockboxCode')}
                </>
              ) : (
                <>
                  <LuLockOpen />
                  {lockboxCode || '-'}
                </>
              )}
            </button>
          </div>
        </div>

        <div className={`${styles.card} ${styles.stepCenter}`}>
          <h3 className={styles.cardTitle}>
            <span>03</span>
            {t('arrival.letUsKnow')}
          </h3>

          <p className={styles.cardText}>{t('arrival.arrivalMessage')}</p>

          <div className={styles.cardActions}>
            <a
              href={`https://wa.me/${data?.host_phone}?text=${arrivalWhatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <FaWhatsapp /> {t('common.messageUsOnWhatsApp')}
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        plugins={[Captions]}
        animation={{ fade: 200 }}
        controller={{ closeOnBackdropClick: true }}
        carousel={{
          imageFit: 'contain',
          imageProps: {
            style: {
              borderRadius: '16px',
            },
          },
        }}
      />
    </div>
  );
};

export default Arrival;
