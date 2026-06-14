import { useEffect, useState } from 'react';

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      setDeferredPrompt(event);
      setIsInstallable(true);

      window.deferredPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowIosModal(true);
      return;
    }

    const promptEvent = deferredPrompt || window.deferredPrompt;

    if (!promptEvent) {
      alert('Use browser menu and choose Add to Home Screen.');
      return;
    }

    promptEvent.prompt();

    const choiceResult = await promptEvent.userChoice;

    if (choiceResult.outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
      window.deferredPrompt = null;
    }
  };

  return {
    handleInstall,
    isInstallable,
    showIosModal,
    setShowIosModal,
  };
}
