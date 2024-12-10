/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RotateCw } from 'lucide-react';

export function FlashCard({ card, onMemorized, settings }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getFontSize = () => {
    switch (settings.fontSize) {
      case 'small':
        return 'text-2xl';
      case 'large':
        return 'text-4xl';
      default:
        return 'text-3xl';
    }
  };

  return (
    <div 
      className="relative w-full max-w-md aspect-[3/2] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden ${
          settings.darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg p-8 flex flex-col items-center justify-center`}>
          <h2 className={`${getFontSize()} font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
            {card.front}
          </h2>
          <div className="absolute bottom-4 right-4">
            <RotateCw className={`w-6 h-6 ${settings.darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          </div>
          <span className={settings.darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Click to see the translation
          </span>
        </div>
        
        {/* Back */}
        <div className={`absolute w-full h-full backface-hidden ${
          settings.darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg p-8 rotate-y-180 flex flex-col items-center justify-center`}>
          <h2 className={`${getFontSize()} font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
            {card.back}
          </h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMemorized(card.id);
            }}
            className="absolute bottom-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Memorized
          </button>
        </div>
      </div>
    </div>
  );
}