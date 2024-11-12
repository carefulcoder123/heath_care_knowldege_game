import React from 'react';
import { Award, RotateCcw } from 'lucide-react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ResultsScreen({ score, totalQuestions, onRestart }: ResultsScreenProps) {
  const percentage = (score / (totalQuestions * 10)) * 100;
  
  const getFeedback = () => {
    if (percentage >= 90) return "Outstanding! You're a healthcare expert!";
    if (percentage >= 70) return "Great job! You have solid medical knowledge!";
    if (percentage >= 50) return "Good effort! Keep learning to improve your score!";
    return "Keep studying! There's room for improvement.";
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-6">
        <Award className="w-16 h-16 text-yellow-500" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
      
      <div className="mb-8">
        <p className="text-2xl font-semibold text-blue-600 mb-2">
          Your Score: {score} / {totalQuestions * 10}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          ({percentage.toFixed(1)}%)
        </p>
        <p className="text-lg text-gray-800">{getFeedback()}</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onRestart}
          className="flex items-center justify-center space-x-2 w-full btn btn-primary p-4"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}