/* eslint-disable react/prop-types */
// import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Header({ settings }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <GraduationCap className={`w-8 h-8 ${
          settings.darkMode ? 'text-blue-400' : 'text-blue-500'
        }`} />
        <h1 className={`text-4xl font-bold ${
          settings.darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Language Flashcards
        </h1>
      </div>
      <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
        Select a deck and start learning!
      </p>
    </div>
  );
}