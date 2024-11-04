import React from 'react';

export const PolicyLinks = () => {
  return (
    <div className="flex gap-2 items-center">
      <a 
        href="https://www.iubenda.com/privacy-policy/44771661"
        className="hover:text-cyan-600"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>
      <span className="mx-2">|</span>
      <a 
        href="https://www.iubenda.com/termini-e-condizioni/44771661"
        className="hover:text-cyan-600"
        target="_blank"
        rel="noreferrer"
      >
        Termini e Condizioni
      </a>
      <span className="mx-2">|</span>
      <a 
        href="https://www.iubenda.com/privacy-policy/44771661/cookie-policy"
        className="hover:text-cyan-600"
        target="_blank"
        rel="noreferrer"
      >
        Cookie Policy
      </a>
    </div>
  );
};
