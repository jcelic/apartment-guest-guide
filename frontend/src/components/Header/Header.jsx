import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { GoHome } from 'react-icons/go';
import { useLayoutEffect, useRef } from 'react';

const Header = ({ showBackButton }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { token } = useParams();
  const headerRef = useRef(null);

  const homePath = `/guide/${token}`;

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerRef.current.offsetHeight}px`,
      );
    };

    setHeaderHeight();

    const observer = new ResizeObserver(setHeaderHeight);
    observer.observe(headerRef.current);

    window.addEventListener('resize', setHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', setHeaderHeight);
    };
  }, [i18n.language, showBackButton]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <h1>
            <Link to={homePath}>{t('header.apartmentName')}</Link>
          </h1>
          <p>
            <Link to={homePath}>{t('header.guestGuide')}</Link>
          </p>
        </div>

        {showBackButton && (
          <button
            type="button"
            className={styles.back}
            onClick={() => navigate(homePath)}
            aria-label={t('header.home')}
          >
            <GoHome />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
