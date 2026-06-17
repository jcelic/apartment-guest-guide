import HomeCard from '../../components/HomeCard/HomeCard';
import styles from './Home.module.css';
import {
  LuKeyRound,
  LuCircleParking,
  LuWifi,
  LuUtensils,
  LuListChecks,
  LuDoorOpen,
  LuSmartphone,
} from 'react-icons/lu';
import { IoTvOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { MdCoffeeMaker } from 'react-icons/md';
import usePageTitle from '../../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import { FiMapPin } from 'react-icons/fi';
import { useInstallPrompt } from '../../hooks/useInstallPrompt';

import { LuTriangleAlert } from 'react-icons/lu';

const Home = () => {
  const { t } = useTranslation();
  usePageTitle(t('home.pageTitle'));

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  const { handleInstall, showIosModal, setShowIosModal } = useInstallPrompt();

  return (
    <>
      <h3 className="pageSubtitle">{t('home.subtitle')}</h3>
      <div className={styles.homeGrid}>
        <HomeCard
          title={t('home.cards.arrival.title')}
          icon={<LuKeyRound />}
          desc={t('home.cards.arrival.desc')}
          to="arrival"
        />

        <HomeCard
          title={t('home.cards.parking.title')}
          icon={<LuCircleParking />}
          desc={t('home.cards.parking.desc')}
          to="parking"
        />

        <HomeCard
          title={t('home.cards.wifi.title')}
          icon={<LuWifi />}
          desc={t('home.cards.wifi.desc')}
          to="wifi"
        />

        <HomeCard
          title={t('home.cards.apartmentInfo.title')}
          icon={<IoInformationCircleOutline />}
          desc={t('home.cards.apartmentInfo.desc')}
          to="apartment-info"
        />

        <HomeCard
          title={t('home.cards.tv.title')}
          icon={<IoTvOutline />}
          desc={t('home.cards.tv.desc')}
          to="tv"
        />

        <HomeCard
          title={t('home.cards.coffeeMaker.title')}
          icon={<MdCoffeeMaker />}
          desc={t('home.cards.coffeeMaker.desc')}
          to="coffee-maker"
        />

        <HomeCard
          title={t('home.cards.dishwasher.title')}
          icon={<LuUtensils />}
          desc={t('home.cards.dishwasher.desc')}
          to="dishwasher"
        />

        <HomeCard
          title={t('home.cards.houseRules.title')}
          icon={<LuListChecks />}
          desc={t('home.cards.houseRules.desc')}
          to="house-rules"
        />

        <HomeCard
          title={t('home.cards.checkout.title')}
          icon={<LuDoorOpen />}
          desc={t('home.cards.checkout.desc')}
          to="check-out"
        />

        <HomeCard
          title={t('home.cards.explore.title')}
          icon={<FiMapPin />}
          desc={t('home.cards.explore.description')}
          to="explore"
        />

        <HomeCard
          title={t('home.cards.emergency.title')}
          icon={<LuTriangleAlert />}
          desc={t('home.cards.emergency.description')}
          to="emergency"
        />

        {isMobile && !isStandalone && (
          <HomeCard
            title={t('home.cards.installGuide.title')}
            icon={<LuSmartphone />}
            desc={t('home.cards.installGuide.description')}
            onClick={handleInstall}
          />
        )}
      </div>

      {showIosModal && (
        <div className={styles.iosModal}>
          <div className={styles.iosModalBox}>
            <h3>Install on iPhone</h3>

            <p>
              Open this page in Safari, tap the Share button, then choose Add to
              Home Screen.
            </p>

            <button type="button" onClick={() => setShowIosModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
