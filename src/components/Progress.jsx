/* eslint-disable react/prop-types */
// import React from 'react';

export function Progress({ current, total, memorized, settings }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md mb-8">
      <div className="flex justify-between mb-2">
        <span className={`text-sm ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Card {current} of {total}
        </span>
        <span className={`text-sm ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Memorized: {memorized}
        </span>
      </div>
      <div className={`h-2 ${settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}