/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Modal } from '../components/Modal';

export function CreateDeckModal({ isOpen, onClose, onDeckCreated, settings }) {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [cards, setCards] = useState([
    { id: '1', front: '', back: '' }
  ]);

  const handleAddCard = () => {
    setCards([...cards, { id: Date.now().toString(), front: '', back: '' }]);
  };

  const handleRemoveCard = (id) => {
    if (cards.length > 1) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeck = {
      id: Date.now().toString(),
      name,
      language,
      cards: cards.map(card => ({ ...card, memorized: false }))
    };
      onDeckCreated(newDeck);
      onClose();
      // Reset form
      setName('');
      setLanguage('');
      setCards([{ id: '1', front: '', back: '' }]);
  };

  const inputClass = `w-full px-3 py-2 rounded-lg border ${
    settings.darkMode
      ? 'bg-gray-700 border-gray-600 text-white'
      : 'bg-white border-gray-300'
  }`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Deck" settings={settings}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className={`block mb-1 ${settings.darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Deck Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={`block mb-1 ${settings.darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Language
            </label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className={`font-medium ${settings.darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Cards
            </h3>
            <button
              type="button"
              onClick={handleAddCard}
              className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
            >
              <Plus className="w-4 h-4" />
              Add Card
            </button>
          </div>

          <div className="space-y-4 max-h-[40vh] overflow-y-auto">
            {cards.map((card, index) => (
              <div key={card.id} className="flex gap-2 items-start">
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    value={card.front}
                    onChange={(e) => {
                      const newCards = [...cards];
                      newCards[index].front = e.target.value;
                      setCards(newCards);
                    }}
                    placeholder="Front"
                    className={inputClass}
                    required
                  />
                  <input
                    type="text"
                    value={card.back}
                    onChange={(e) => {
                      const newCards = [...cards];
                      newCards[index].back = e.target.value;
                      setCards(newCards);
                    }}
                    placeholder="Back"
                    className={inputClass}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveCard(card.id)}
                  className={`p-2 rounded-lg ${
                    settings.darkMode
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100'
                  }`}
                  disabled={cards.length === 1}
                >
                  <Trash2 className={`w-5 h-5 ${
                    cards.length === 1
                      ? 'text-gray-400'
                      : settings.darkMode
                        ? 'text-gray-400 hover:text-red-400'
                        : 'text-gray-500 hover:text-red-500'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${
              settings.darkMode
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Create Deck
          </button>
        </div>
      </form>
    </Modal>
  );
}