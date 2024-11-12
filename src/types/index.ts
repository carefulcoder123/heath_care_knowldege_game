export interface Question {
  id: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  score: number;
  level: number;
  completedQuestions: number[];
}

export interface GameState {
  currentQuestion: number;
  score: number;
  showExplanation: boolean;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
}