import { useState, useCallback, useEffect } from 'react';
import { defaultDecks } from '../data/defaultDecks';

const STORAGE_KEY = 'flashcard-decks';

export function useFlashcards() {
  const [decks, setDecks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const userDecks = JSON.parse(saved);
      // Merge user decks with default decks, preserving user modifications
      return defaultDecks.map(defaultDeck => {
        const userDeck = userDecks.find(deck => deck.id === defaultDeck.id);
        return userDeck || defaultDeck;
      }).concat(userDecks.filter(deck => !deck.isDefault));
    }
    return defaultDecks;
  });

  const [selectedDeck, setSelectedDeck] = useState(() => decks[0] || null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(() => selectedDeck?.cards || []);

  useEffect(() => {
    // Only save user-created decks and modifications to default decks
    const decksToSave = decks.filter(deck => {
      const defaultDeck = defaultDecks.find(d => d.id === deck.id);
      return !defaultDeck || JSON.stringify(deck) !== JSON.stringify(defaultDeck);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decksToSave));
  }, [decks]);

  const handleSelectDeck = useCallback((deck) => {
    setSelectedDeck(deck);
    setCards(deck.cards);
    setCurrentIndex(0);
  }, []);

  const handleDeleteDeck = useCallback((deckId) => {
    setDecks(prevDecks => {
      const newDecks = prevDecks.filter(deck => deck.id !== deckId);
      // If the deleted deck was selected, select the first available deck
      if (selectedDeck?.id === deckId) {
        const firstDeck = newDecks[0];
        setSelectedDeck(firstDeck);
        setCards(firstDeck?.cards || []);
        setCurrentIndex(0);
      }
      return newDecks;
    });
  }, [selectedDeck]);

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, cards.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const handleShuffle = useCallback(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  }, [cards]);

  const handleMemorized = useCallback((cardId) => {
    const updatedCards = cards.map(card =>
      card.id === cardId ? { ...card, memorized: true } : card
    );
    setCards(updatedCards);
    
    if (selectedDeck) {
      const updatedDecks = decks.map(deck =>
        deck.id === selectedDeck.id
          ? { ...deck, cards: updatedCards }
          : deck
      );
      setDecks(updatedDecks);
    }
  }, [cards, selectedDeck, decks]);

  const handleCreateDeck = useCallback((newDeck) => {
    setDecks(prevDecks => [...prevDecks, { ...newDeck, isDefault: false }]);
    setSelectedDeck(newDeck);
    setCards(newDeck.cards);
    setCurrentIndex(0);
  }, []);

  const memorizedCount = cards.filter(card => card.memorized).length;

  return {
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
  };
}