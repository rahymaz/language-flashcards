/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Modal } from './Modal';

export function SettingsButton({ settings, onUpdateSettings }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFontSizeChange = (size) => {
    onUpdateSettings({ ...settings, fontSize: size });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
      >
        <Settings className="w-6 h-6" />
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Settings">
        <div className="space-y-6">
          <div>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode</span>
              <button
                onClick={() => onUpdateSettings({ ...settings, darkMode: !settings.darkMode })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.darkMode ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Font Size</label>
            <div className="flex gap-2">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  className={`px-4 py-2 rounded-lg ${
                    settings.fontSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}