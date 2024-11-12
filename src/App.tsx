import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { GameProgress } from './components/GameProgress';
import { ResultsScreen } from './components/ResultsScreen';
import type { GameState } from './types';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    showExplanation: false,
    selectedAnswer: null,
    isCorrect: null,
  });

  const handleAnswerSelect = (selectedIndex: number) => {
    const currentQuestion = questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;

    setGameState((prev) => ({
      ...prev,
      selectedAnswer: selectedIndex,
      isCorrect,
      showExplanation: true,
      score: isCorrect ? prev.score + 10 : prev.score,
    }));

    if (gameState.currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setGameState((prev) => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          showExplanation: false,
          selectedAnswer: null,
          isCorrect: null,
        }));
      }, 3000);
    }
  };

  const handleRestart = () => {
    setGameState({
      currentQuestion: 0,
      score: 0,
      showExplanation: false,
      selectedAnswer: null,
      isCorrect: null,
    });
  };

  const isGameComplete = gameState.currentQuestion === questions.length - 1 && gameState.showExplanation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Healthcare Knowledge Game
          </h1>
          <p className="text-lg text-gray-600">
            Test and improve your medical knowledge through interactive learning
          </p>
        </div>

        {!isGameComplete ? (
          <>
            <GameProgress
              score={gameState.score}
              currentQuestion={gameState.currentQuestion}
              totalQuestions={questions.length}
            />

            <QuestionCard
              question={questions[gameState.currentQuestion]}
              selectedAnswer={gameState.selectedAnswer}
              isCorrect={gameState.isCorrect}
              showExplanation={gameState.showExplanation}
              onSelectAnswer={handleAnswerSelect}
            />
          </>
        ) : (
          <ResultsScreen
            score={gameState.score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;