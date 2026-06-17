import { useEffect, useState } from 'react';

let deferredPromptEvent = null;

export function useInstallPrompt() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      deferredPromptEvent = event;
      setIsInstallable(true);
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

    if (!deferredPromptEvent) {
      return;
    }

    await deferredPromptEvent.prompt();

    const choiceResult = await deferredPromptEvent.userChoice;

    if (choiceResult.outcome === 'accepted') {
      deferredPromptEvent = null;
      setIsInstallable(false);
    }
  };

  return {
    handleInstall,
    isInstallable,
    showIosModal,
    setShowIosModal,
  };
}
