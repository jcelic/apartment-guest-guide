import {
  LuAmbulance,
  LuFlame,
  LuPhoneCall,
  LuShield,
  LuTriangleAlert,
} from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

import usePageTitle from '../../hooks/usePageTitle';
import styles from './EmergencyContacts.module.css';

const EmergencyContacts = () => {
  const { t } = useTranslation();

  usePageTitle(t('emergency.title'));

  const contacts = [
    {
      name: t('emergency.contacts.general.title'),
      number: '112',
      description: t('emergency.contacts.general.description'),
      icon: <LuTriangleAlert />,
      highlight: true,
    },
    {
      name: t('emergency.contacts.ambulance.title'),
      number: '194',
      description: t('emergency.contacts.ambulance.description'),
      icon: <LuAmbulance />,
    },
    {
      name: t('emergency.contacts.police.title'),
      number: '192',
      description: t('emergency.contacts.police.description'),
      icon: <LuShield />,
    },
    {
      name: t('emergency.contacts.fire.title'),
      number: '193',
      description: t('emergency.contacts.fire.description'),
      icon: <LuFlame />,
    },
  ];

  return (
    <div className={styles.emergency}>
      <h1 className="pageTitle">{t('emergency.title')}</h1>

      <h3 className="pageSubtitle">{t('emergency.subtitle')}</h3>

      <div className={styles.infoBox}>
        <LuPhoneCall />

        <p>{t('emergency.infoText')}</p>
      </div>

      <div className={styles.grid}>
        {contacts.map((contact) => (
          <article
            key={contact.number}
            className={`${styles.card} ${
              contact.highlight ? styles.highlightCard : ''
            }`}
          >
            <div className={styles.iconBox}>{contact.icon}</div>

            <div className={styles.content}>
              <span className={styles.label}>{contact.name}</span>

              <a href={`tel:${contact.number}`} className={styles.number}>
                {contact.number}
              </a>

              <p>{contact.description}</p>
            </div>

            <a href={`tel:${contact.number}`} className={styles.callBtn}>
              {t('emergency.call')}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
