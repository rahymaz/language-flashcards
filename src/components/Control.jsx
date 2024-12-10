/* eslint-disable react/prop-types */
// import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

export function Controls({
  onPrevious,
  onNext,
  onShuffle,
  canGoPrevious,
  canGoNext,
  settings,
}) {
  const buttonClass = `p-3 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
    settings.darkMode
      ? 'bg-gray-800 hover:bg-gray-700'
      : 'bg-white hover:bg-gray-50'
  }`;

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={buttonClass}
      >
        <ChevronLeft className={`w-6 h-6 ${
          settings.darkMode ? 'text-gray-200' : 'text-gray-800'
        }`} />
      </button>
      
      <button
        onClick={onShuffle}
        className={buttonClass}
      >
        <Shuffle className={`w-6 h-6 ${
          settings.darkMode ? 'text-gray-200' : 'text-gray-800'
        }`} />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={buttonClass}
      >
        <ChevronRight className={`w-6 h-6 ${
          settings.darkMode ? 'text-gray-200' : 'text-gray-800'
        }`} />
      </button>
    </div>
  );
}