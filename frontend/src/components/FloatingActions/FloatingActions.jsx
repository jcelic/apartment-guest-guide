import { useState, useRef, useEffect } from 'react';
import { LuLanguages } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import styles from './FloatingActions.module.css';
import { useTranslation } from 'react-i18next';
import { useReservation } from '../../hooks/useReservation';
import { useParams } from 'react-router-dom';
import { useGuideSecrets } from '../../hooks/useGuideSecrets';

const FloatingActions = () => {
  const { token } = useParams();
  const { i18n } = useTranslation();

  const { data: secrets } = useGuideSecrets(token);

  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const { data } = useReservation(token);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hr', label: 'Hrvatski' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '简体中文' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('guestGuideLanguage');

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      return;
    }

    if (data?.language) {
      i18n.changeLanguage(data.language);
    }
  }, [data, i18n]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.translateWrapper}>
        {open && (
          <div className={styles.menu}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`${styles.menuItem} ${
                  i18n.language === lang.code ? styles.activeLanguage : ''
                }`}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  localStorage.setItem('guestGuideLanguage', lang.code);
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          className={styles.translateButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          <LuLanguages />
        </button>
      </div>

      <a
        href={`https://wa.me/${secrets?.host_phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingActions;
