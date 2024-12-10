/* eslint-disable react/prop-types */
// import React from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children, settings }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={`relative w-full max-w-md p-6 m-4 rounded-lg shadow-xl ${
        settings?.darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-xl font-semibold ${
            settings?.darkMode ? 'text-white' : 'text-gray-800'
          }`}>{title}</h2>
          <button
            onClick={onClose}
            className={`${
              settings?.darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}