import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoCard from '../../components/InfoCard/InfoCard';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import styles from './ApartmentInfo.module.css';
import placeholderImg from '../../assets/placeholder-img.png';

import { TbIroningSteam } from 'react-icons/tb';
import {
  PiTowel,
  PiHairDryer,
  PiWashingMachine,
  PiFirstAidKit,
  PiClipboardText,
} from 'react-icons/pi';
import usePageTitle from '../../hooks/usePageTitle';

const ApartmentInfo = () => {
  const { t } = useTranslation();
  usePageTitle(t('apartmentInfo.title'));

  const [lightboxImages, setLightboxImages] = useState(null);

  const openLightbox = (images) => {
    setLightboxImages(images);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
  };

  return (
    <div className={styles.info}>
      <h1 className="pageTitle">{t('apartmentInfo.title')}</h1>
      <h3 className="pageSubtitle">{t('apartmentInfo.subtitle')}</h3>

      <div className={styles.cards}>
        <InfoCard
          icon={<TbIroningSteam style={{ strokeWidth: 1.5 }} />}
          title={t('apartmentInfo.items.ironingBoard.title')}
        >
          <p>{t('apartmentInfo.items.ironingBoard.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<PiClipboardText />}
          title={t('apartmentInfo.items.applianceManuals.title')}
        >
          <p>{t('apartmentInfo.items.applianceManuals.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<PiFirstAidKit />}
          title={t('apartmentInfo.items.firstAidKit.title')}
        >
          <p>{t('apartmentInfo.items.firstAidKit.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<TbIroningSteam style={{ strokeWidth: 1.5 }} />}
          title={t('apartmentInfo.items.iron.title')}
        >
          <p>{t('apartmentInfo.items.iron.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<PiTowel />}
          title={t('apartmentInfo.items.extraTowels.title')}
        >
          <p>{t('apartmentInfo.items.extraTowels.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<PiHairDryer />}
          title={t('apartmentInfo.items.hairDryer.title')}
        >
          <p>{t('apartmentInfo.items.hairDryer.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>

        <InfoCard
          icon={<PiWashingMachine />}
          title={t('apartmentInfo.items.washingMachineCapsules.title')}
        >
          <p>{t('apartmentInfo.items.washingMachineCapsules.text')}</p>
          <button onClick={() => openLightbox([{ src: placeholderImg }])}>
            {t('common.viewPhoto')}
          </button>
        </InfoCard>
      </div>

      <Lightbox
        open={!!lightboxImages}
        close={closeLightbox}
        slides={lightboxImages || []}
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

export default ApartmentInfo;
