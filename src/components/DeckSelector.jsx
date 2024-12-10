/* eslint-disable react/prop-types */
// import React from 'react';
import { CreateDeckButton } from './CreateDeckButton';
import { Trash2 } from 'lucide-react';

export default function DeckSelector({ decks, selectedDeck, onSelectDeck, onDeckCreated, onDeleteDeck, settings }) {
  // Group decks by language
  const groupedDecks = decks.reduce((acc, deck) => {
    const language = deck.language || 'Other';
    if (!acc[language]) {
      acc[language] = [];
    }
    acc[language].push(deck);
    return acc;
  }, {});

  return (
    <div className="mb-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedDecks).map(([language, languageDecks]) => (
          <div key={language} className="space-y-3">
            <h2 className={`text-lg font-medium ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {language}
            </h2>
            <div className="flex flex-col space-y-2">
              {languageDecks.map((deck) => (
                <div key={deck.id} className="relative group">
                  <button
                    onClick={() => onSelectDeck(deck)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                      selectedDeck?.id === deck.id
                        ? 'bg-blue-500 text-white'
                        : settings.darkMode
                          ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="block text-sm opacity-75">{deck.language}</span>
                    <span className="block">{deck.name}</span>
                    <span className="block text-sm mt-1 opacity-75">
                      {deck.cards.length} cards
                    </span>
                  </button>
                  {!deck.isDefault && (
                    <button
                      onClick={() => onDeleteDeck(deck.id)}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                        settings.darkMode
                          ? 'hover:bg-gray-700 text-gray-400 hover:text-red-400'
                          : 'hover:bg-gray-100 text-gray-500 hover:text-red-500'
                      }`}
                      title="Delete deck"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <CreateDeckButton settings={settings} onDeckCreated={onDeckCreated} />
      </div>
    </div>
  );
}