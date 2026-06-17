import { useEffect, useRef, useState } from 'react';

export function useInstallPrompt() {
  const deferredPromptRef = useRef(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      deferredPromptRef.current = event;
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

    if (!deferredPromptRef.current) {
      return;
    }

    deferredPromptRef.current.prompt();

    const choiceResult = await deferredPromptRef.current.userChoice;

    if (choiceResult.outcome === 'accepted') {
      deferredPromptRef.current = null;
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
