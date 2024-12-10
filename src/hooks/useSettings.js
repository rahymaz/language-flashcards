import { useState, useEffect } from 'react';

const DEFAULT_SETTINGS = {
  darkMode: false,
  fontSize: 'medium',
};

export function useSettings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('flashcard-settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('flashcard-settings', JSON.stringify(settings));
    
    // Apply font size to body
    document.body.classList.remove('text-sm', 'text-base', 'text-lg');
    switch (settings.fontSize) {
      case 'small':
        document.body.classList.add('text-sm');
        break;
      case 'large':
        document.body.classList.add('text-lg');
        break;
      default:
        document.body.classList.add('text-base');
    }
  }, [settings]);

  return [settings, setSettings];
}