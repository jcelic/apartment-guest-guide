import { useEffect, useState } from 'react';

export function useInstallPrompt() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  useEffect(() => {
    const handleInstallAvailable = () => {
      setIsInstallable(Boolean(window.deferredPrompt));
    };

    handleInstallAvailable();

    window.addEventListener('pwa-install-available', handleInstallAvailable);

    return () => {
      window.removeEventListener(
        'pwa-install-available',
        handleInstallAvailable,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowIosModal(true);
      return;
    }

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
      console.log('PWA install prompt is not available yet.');
      return;
    }

    await promptEvent.prompt();

    const choiceResult = await promptEvent.userChoice;

    window.deferredPrompt = null;
    setIsInstallable(false);

    console.log('PWA install result:', choiceResult.outcome);
  };

  return {
    handleInstall,
    isInstallable,
    showIosModal,
    setShowIosModal,
  };
}
