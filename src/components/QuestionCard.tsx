import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  showExplanation: boolean;
  onSelectAnswer: (index: number) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  isCorrect,
  showExplanation,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
          {question.category}
        </span>
        <span className="px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full">
          {question.difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showExplanation && onSelectAnswer(index)}
            disabled={showExplanation}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              selectedAnswer === index
                ? isCorrect
                  ? 'bg-green-100 border-green-500'
                  : 'bg-red-100 border-red-500'
                : 'bg-gray-50 hover:bg-gray-100'
            } ${
              showExplanation && index === question.correctAnswer
                ? 'bg-green-100 border-green-500'
                : ''
            } border-2 ${
              selectedAnswer === index ? 'border-current' : 'border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showExplanation && index === question.correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
              {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}