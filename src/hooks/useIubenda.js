import { useEffect } from 'react';

export const useIubenda = () => {
  useEffect(() => {
    const loader = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdn.iubenda.com/iubenda.js';
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      } catch (error) {
        console.warn('Iubenda policy script loading failed:', error);
      }
    };

    loader();

    return () => {
      const scripts = document.querySelectorAll('script[src*="iubenda.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
};