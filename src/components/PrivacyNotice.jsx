import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const PrivacyNotice = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  const checkPrivacyPreference = () => {
    return document.cookie.split(';').some(item => 
      item.trim().startsWith('site_preferences=accepted')
    );
  };

  const setPrivacyPreference = (accepted = true) => {
    document.cookie = `site_preferences=${accepted ? 'accepted' : 'rejected'};path=/;max-age=31536000`;
    setHasConsent(accepted);
    setShowNotice(false);

    try {
      if (window._iub?.cs?.api) {
        if (accepted) {
          window._iub.cs.api.acceptAllConsents();
        } else {
          window._iub.cs.api.rejectAllConsents();
        }
      }
    } catch (error) {
      console.warn('Privacy service interaction failed:', error);
    }
  };

  const initializePrivacyService = () => {
    try {
      window._iub = window._iub || [];
      window._iub.csConfiguration = {
        siteId: 3822889,
        cookiePolicyId: 44771661,
        lang: "it",
        storage: { useSiteId: true },
        banner: {
          position: 'float-bottom-center',
          acceptButtonDisplay: true,
          customizeButtonDisplay: true,
          rejectButtonDisplay: true,
          closeButtonRejects: false,
          acceptButtonCaptionColor: "#FFFFFF",
          customizeButtonCaptionColor: "#4D4D4D",
          rejectButtonColor: "#FFFFFF",
          rejectButtonCaptionColor: "#4D4D4D",
          textColor: "#333333",
          backgroundColor: "#FFFFFF",
          rejectButtonBackgroundColor: "#F0F0F0",
          acceptButtonBackgroundColor: "#0284C7"
        },
        callback: {
          onReady: () => setHasError(false),
          onError: () => {
            setHasError(true);
            setShowNotice(true);
          }
        }
      };

      const scriptUrls = [
        { url: 'https://cs.iubenda.com/autoblocking/3822889.js' },
        { 
          url: 'https://cdn.iubenda.com/cs/iubenda_cs.js',
          options: { charset: 'UTF-8' }
        }
      ];

      scriptUrls.forEach(({ url, options = {} }) => {
        const scriptEl = document.createElement('script');
        scriptEl.src = url;
        scriptEl.async = true;
        
        Object.entries(options).forEach(([key, value]) => {
          scriptEl.setAttribute(key, value);
        });

        scriptEl.onerror = () => {
          setHasError(true);
          setShowNotice(true);
        };

        document.body.appendChild(scriptEl);
      });

    } catch (error) {
      console.warn('Privacy service initialization failed:', error);
      setHasError(true);
      setShowNotice(true);
    }
  };

  useEffect(() => {
    const hasPreference = checkPrivacyPreference();
    
    if (!hasPreference) {
      initializePrivacyService();
      setShowNotice(true);
    }

    return () => {
      const scripts = document.querySelectorAll(
        'script[src*="iubenda"], script[src*="cs.iubenda"]'
      );
      scripts.forEach(script => script.remove());
    };
  }, []);

  if (showNotice && hasError) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white border-t shadow-lg">
          <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Preferenze di Privacy
                </h2>
                <p className="text-gray-700">
                  Utilizziamo strumenti per migliorare la tua esperienza sul nostro sito. 
                  Continuando a navigare, accetti la nostra{' '}
                  <a 
                    href="https://www.iubenda.com/privacy-policy/44771661"
                    className="text-cyan-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    informativa sulla privacy
                  </a>.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  onClick={() => setPrivacyPreference(true)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  Accetta tutti
                </Button>
                <Button 
                  onClick={() => setPrivacyPreference(false)}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Rifiuta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PrivacyNotice;