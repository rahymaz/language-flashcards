/* eslint-disable react/prop-types */
// import React from 'react';
import { FlashCard } from '../components/FlashCard';
import { Controls } from '../components/Control';
import { Progress } from '../components/Progress';

export function FlashcardContainer({
  currentCard,
  currentIndex,
  totalCards,
  memorizedCount,
  onMemorized,
  onPrevious,
  onNext,
  onShuffle,
  settings
}) {
  return (
    <div className="flex flex-col items-center">
      <Progress
        current={currentIndex + 1}
        total={totalCards}
        memorized={memorizedCount}
        settings={settings}
      />

      <FlashCard
        card={currentCard}
        onMemorized={onMemorized}
        settings={settings}
      />

      <Controls
        onPrevious={onPrevious}
        onNext={onNext}
        onShuffle={onShuffle}
        canGoPrevious={currentIndex > 0}
        canGoNext={currentIndex < totalCards - 1}
        settings={settings}
      />
    </div>
  );
}