import { Outlet, useMatch, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from './GuideLayout.module.css';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import FloatingActions from '../components/FloatingActions/FloatingActions';
import { useReservation } from '../hooks/useReservation';
import FullPageLoader from '../components/FullPageLoader/FullPageLoader';
import InvalidLink from '../components/InvalidLink/InvalidLink';
import { useEffect } from 'react';

const GuideLayout = () => {
  const { token } = useParams();

  const { data: reservation, isLoading, isError } = useReservation(token);

  useEffect(() => {
    if (reservation && !isError) {
      localStorage.setItem('lastGuidePath', `/guide/${token}`);
    }
  }, [reservation, isError, token]);

  const isHome = !!useMatch({
    path: '/guide/:token',
    end: true,
  });

  if (isLoading) {
    return <FullPageLoader />;
  }

  if (isError) {
    return <InvalidLink />;
  }

  return (
    <>
      <ScrollToTop />
      <Header showBackButton={!isHome} />

      <main className={styles.main}>
        <div className={isHome ? styles.containerWide : styles.container}>
          <Outlet />
        </div>

        <FloatingActions />
      </main>
    </>
  );
};

export default GuideLayout;
