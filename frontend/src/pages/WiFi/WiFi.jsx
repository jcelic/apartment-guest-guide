import { useState } from 'react';
import styles from './WiFi.module.css';
import { LuWifi, LuLock, LuCopy, LuCheck } from 'react-icons/lu';
import toast from 'react-hot-toast';
import usePageTitle from '../../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useGuideSecrets } from '../../hooks/useGuideSecrets';
import Spinner from '../../components/Spinner/Spinner';

const WiFi = () => {
  const { token } = useParams();
  const { t } = useTranslation();
  usePageTitle(t('wifi.title'));
  const [copied, setCopied] = useState(false);

  const { data, isLoading } = useGuideSecrets(token);

  const networkName = data?.wifi_name ?? '';
  const password = data?.wifi_password ?? '';

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast.success(t('wifi.passwordCopied'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error(t('wifi.copyError'));
    }
  };

  return (
    <div className={styles.wifi}>
      <h1 className="pageTitle">{t('wifi.title')}</h1>
      <h3 className="pageSubtitle">{t('wifi.subtitle')}</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <LuWifi />
            {t('wifi.networkName')}
          </h3>

          <div className={styles.cardText}>
            <span>{isLoading ? <Spinner /> : networkName}</span>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <LuLock />
            {t('wifi.networkPassword')}
          </h3>

          <div className={styles.cardText}>
            <span>{isLoading ? <Spinner /> : password}</span>

            <button
              type="button"
              className={styles.copyButton}
              onClick={copyPassword}
              disabled={!password}
            >
              {copied ? (
                <LuCheck className={styles.checkIcon} />
              ) : (
                <LuCopy className={styles.copyIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiFi;
