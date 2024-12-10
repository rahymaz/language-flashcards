// import React from 'react';
import Header from './components/Header';
import DeckSelector from './components/DeckSelector';
import { FlashcardContainer } from './components/FlashcardContainer';
import { HelpButton } from './components/HelpButton';
import { SettingsButton } from './components/SettingsButton';
import { useFlashcards } from './hooks/useFlashcards';
import { useSettings } from './hooks/useSettings';
// import { defaultDecks } from "./data/defaultDecks";


 export default function App() {
  const [settings, setSettings] = useSettings();
  const {
    selectedDeck,
    currentIndex,
    cards,
    memorizedCount,
    handleSelectDeck,
    handleNext,
    handlePrevious,
    handleShuffle,
    handleMemorized,
    handleCreateDeck,
    handleDeleteDeck,
    decks,
  } = useFlashcards();

  return (
    <div className={`min-h-screen transition-colors ${
      settings.darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    } py-6 sm:py-12 px-4`}>
      <div className="max-w-4xl mx-auto">
        <Header settings={settings} />

        <DeckSelector
          decks={decks}
          selectedDeck={selectedDeck}
          onSelectDeck={handleSelectDeck}
          onDeckCreated={handleCreateDeck}
          onDeleteDeck={handleDeleteDeck}
          settings={settings}
        />

        {selectedDeck && cards.length > 0 && (
          <FlashcardContainer
            currentCard={cards[currentIndex]}
            currentIndex={currentIndex}
            totalCards={cards.length}
            memorizedCount={memorizedCount}
            onMemorized={handleMemorized}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onShuffle={handleShuffle}
            settings={settings}
          />
        )}

        <HelpButton settings={settings} />
        <SettingsButton settings={settings} onUpdateSettings={setSettings} />
      </div>
    </div>
  );
}