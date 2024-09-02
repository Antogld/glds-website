import React from 'react';

export const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/2 mx-auto h-3/4 max-h-screen mx-auto overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{children}</h2>
);

export const DialogContent = ({ children }) => (
  <div className="text-gray-600 dark:text-gray-300">
    {children}
  </div>
);
