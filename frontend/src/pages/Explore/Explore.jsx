import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuExternalLink } from 'react-icons/lu';
import usePageTitle from '../../hooks/usePageTitle';
import { exploreCategories, exploreData } from '../../data/exploreData';
import styles from './Explore.module.css';

const Explore = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('beaches');

  usePageTitle(t('explore.title'));

  const filteredPlaces = exploreData[activeCategory] || [];

  return (
    <div className={styles.nearby}>
      <h1 className="pageTitle">{t('explore.title')}</h1>
      <h3 className="pageSubtitle">{t('explore.subtitle')}</h3>

      <div className={styles.tabs} aria-label={t('explore.title')}>
        {exploreCategories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              type="button"
              className={`${styles.tab} ${
                activeCategory === category.id ? styles.activeTab : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <Icon />
              {t(category.labelKey)}
            </button>
          );
        })}
      </div>

      <div className={styles.cards}>
        {filteredPlaces.map((place) => (
          <article key={place.translationKey} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${place.image})` }}
            >
              <div className={styles.overlay}>
                <div className={styles.topRow}>
                  <span className={styles.badge}>
                    {t(`explore.places.${place.translationKey}.badge`)}
                  </span>
                </div>

                <div className={styles.bottomContent}>
                  <h2>{t(`explore.places.${place.translationKey}.name`)}</h2>
                  <p>{t(`explore.places.${place.translationKey}.text`)}</p>

                  <a
                    href={place.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapBtn}
                  >
                    {t('explore.openInMaps')} <LuExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Explore;
