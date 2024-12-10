/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Modal } from '../components/Modal';

export function HelpButton({ settings }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-24 p-3 rounded-full shadow-lg transition-colors ${
          settings.darkMode
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-white hover:bg-gray-50'
        }`}
      >
        <HelpCircle className={`w-6 h-6 ${
          settings.darkMode ? 'text-gray-200' : 'text-gray-800'
        }`} />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="How to Use"
        settings={settings}
      >
        <div className="space-y-4">
          <section>
            <h3 className={`font-semibold mb-2 ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>Getting Started</h3>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              1. Select a language tab at the top
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              2. Choose a deck or create your own
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              3. Click cards to flip them
            </p>
          </section>

          <section>
            <h3 className={`font-semibold mb-2 ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>Navigation</h3>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Use arrow buttons to move between cards
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Click the shuffle button to randomize cards
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Mark cards as memorized when you&apos;ve learned them
            </p>
          </section>

          <section>
            <h3 className={`font-semibold mb-2 ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>Creating Decks</h3>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Click &quot;Create Deck&quot; to make your own
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Add as many cards as you need
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Fill in both sides of each card
            </p>
          </section>

          <section>
            <h3 className={`font-semibold mb-2 ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>Tips</h3>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Practice regularly for best results
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Use the dark mode for night studying
            </p>
            <p className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
              • Adjust text size for comfortable reading
            </p>
          </section>
        </div>
      </Modal>
    </>
  );
}