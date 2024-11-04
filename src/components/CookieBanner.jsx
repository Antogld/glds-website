import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Add configuration first
    const addConfig = () => {
      try {
        window._iub = window._iub || [];
        window._iub.csConfiguration = {
          siteId: 3822889,
          cookiePolicyId: 44771661,
          lang: "it",
          storage: {
            useSiteId: true
          },
          banner: {
            position: 'float-bottom-center',
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            rejectButtonDisplay: true
          }
        };
        return true;
      } catch (error) {
        console.warn('Failed to add iubenda configuration:', error);
        return false;
      }
    };

    // Add scripts safely
    const addScripts = () => {
      try {
        // Autoblocking script
        const autoBlockingScript = document.createElement('script');
        autoBlockingScript.src = 'https://cs.iubenda.com/autoblocking/3822889.js';
        autoBlockingScript.async = true;
        
        // CS script
        const csScript = document.createElement('script');
        csScript.src = 'https://cdn.iubenda.com/cs/iubenda_cs.js';
        csScript.async = true;
        csScript.charset = 'UTF-8';
        
        // Add error handling
        const handleError = () => {
          setHasError(true);
          console.warn('Cookie script loading failed - this may be due to an ad blocker');
        };
        
        autoBlockingScript.onerror = handleError;
        csScript.onerror = handleError;
        
        // Add the scripts to the document
        document.body.appendChild(autoBlockingScript);
        document.body.appendChild(csScript);
        
        return true;
      } catch (error) {
        console.warn('Failed to add iubenda scripts:', error);
        setHasError(true);
        return false;
      }
    };

    // Initialize everything
    const init = () => {
      const configAdded = addConfig();
      if (configAdded) {
        addScripts();
      }
    };

    // Run initialization
    init();

    // Cleanup function
    return () => {
      try {
        const scripts = document.querySelectorAll('script[src*="iubenda"], script[src*="cs.iubenda"]');
        scripts.forEach(script => script.parentNode?.removeChild(script));
      } catch (error) {
        console.warn('Cleanup error:', error);
      }
    };
  }, []);

  // Render simple fallback if scripts fail to load
  if (hasError) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
            Continuando a navigare, accetti la nostra{' '}
            <a 
              href="https://www.iubenda.com/privacy-policy/44771661/cookie-policy" 
              className="text-cyan-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              cookie policy
            </a>.
          </p>
          <button
            onClick={() => setHasError(false)}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
          >
            Accetto
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default CookieBanner;