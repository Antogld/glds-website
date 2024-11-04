export const setCookieConsent = (accepted = true) => {
  try {
    // Set a local cookie for our own reference
    document.cookie = `cookie_consent=${accepted ? 'accepted' : 'rejected'};path=/;max-age=31536000`;
    
    // Try to interact with iubenda if it exists
    if (window._iub && window._iub.cs) {
      if (accepted) {
        window._iub.cs.api.acceptAllConsents();
      } else {
        window._iub.cs.api.rejectAllConsents();
      }
    }
  } catch (error) {
    console.warn('Error setting cookie consent:', error);
  }
};

export const getCookieConsent = () => {
  try {
    return document.cookie.split(';').some(item => item.trim().startsWith('cookie_consent=accepted'));
  } catch {
    return false;
  }
};