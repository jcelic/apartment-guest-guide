import { useTranslation } from 'react-i18next';
import usePageTitle from '../../hooks/usePageTitle';
import styles from './CoffeeMaker.module.css';

import powerRed from '../../assets/coffee/power-red.webp';
import powerGreen from '../../assets/coffee/power-green.webp';
import capsuleHolderLocation from '../../assets/coffee/capsule-holder-location.webp';
import capsuleHolderBack from '../../assets/coffee/capsule-holder-back.webp';
import capsuleInserted from '../../assets/coffee/capsule-inserted.webp';
import waterLevel from '../../assets/coffee/water-level.webp';
import cup from '../../assets/coffee/cup.webp';
import startHot from '../../assets/coffee/start-hot.webp';

const stepImages = [
  powerRed,
  powerGreen,
  capsuleHolderLocation,
  capsuleInserted,
  capsuleHolderBack,
  waterLevel,
  cup,
  startHot,
  powerGreen,
  capsuleInserted,
];

const CoffeeMaker = () => {
  const { t } = useTranslation();
  usePageTitle(t('coffeeMaker.title'));

  const steps = t('coffeeMaker.steps', { returnObjects: true });

  return (
    <div className={styles.coffeeMaker}>
      <h1 className="pageTitle">{t('coffeeMaker.title')}</h1>
      <h3 className="pageSubtitle">{t('coffeeMaker.subtitle')}</h3>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <article className={styles.stepCard} key={step.title}>
            <div className={styles.imageWrap}>
              <img src={stepImages[index]} alt={step.title} />
              <span className={styles.stepNumber}>{index + 1}</span>
            </div>

            <div className={styles.stepContent}>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.infoBox}>
        <h2>{t('coffeeMaker.importantTitle')}</h2>

        <p>{t('coffeeMaker.twoCapsules')}</p>

        <ol>
          <li>{t('coffeeMaker.milkCapsuleFirst')}</li>
          <li>{t('coffeeMaker.waitGreenAgain')}</li>
          <li>{t('coffeeMaker.thenUseCapsule')}</li>
        </ol>
      </div>

      <div className={styles.infoBox}>
        <h2>{t('coffeeMaker.waterTankTitle')}</h2>

        <p>{t('coffeeMaker.waterTankText1')}</p>

        <p>{t('coffeeMaker.waterTankText2')}</p>

        <p>
          <strong>{t('coffeeMaker.waterTankWarning')}</strong>
        </p>
      </div>
    </div>
  );
};

export default CoffeeMaker;
