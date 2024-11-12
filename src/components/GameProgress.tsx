import React from 'react';
import { Trophy } from 'lucide-react';

interface GameProgressProps {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
}

export function GameProgress({ score, currentQuestion, totalQuestions }: GameProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-lg font-semibold">Score: {score}</span>
        </div>
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>
      
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}