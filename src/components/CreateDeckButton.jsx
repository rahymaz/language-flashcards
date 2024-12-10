/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { CreateDeckModal } from '../components/CreateDeckModal';

export function CreateDeckButton({ settings, onDeckCreated }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
          settings.darkMode
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Create Deck</span>
        <span className="sm:hidden">New</span>
      </button>

      <CreateDeckModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDeckCreated={onDeckCreated}
        settings={settings}
      />
    </>
  );
}