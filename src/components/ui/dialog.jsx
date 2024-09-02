
import React from 'react';
import { Dialog as RadixDialog, DialogOverlay, DialogContent as RadixDialogContent, DialogTitle as RadixDialogTitle } from '@radix-ui/react-dialog';

export const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <RadixDialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/30" />
      {children}
    </RadixDialog>
  );
};

export const DialogContent = ({ children }) => {
  return (
    <RadixDialogContent className="fixed bg-white rounded-lg shadow-lg p-4 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full">
      {children}
    </RadixDialogContent>
  );
};

export const DialogTitle = ({ children }) => {
  return (
    <RadixDialogTitle className="text-xl font-semibold mb-4">
      {children}
    </RadixDialogTitle>
  );
};
