export type StcwCategory =
  | "fire"
  | "survival"
  | "firstAid"
  | "pssr"
  | "seamanship"
  | "watchkeeping"
  | "emergency";

export type StcwDifficulty = "easy" | "medium" | "hard";

export type StcwQuestion = {
  id: string;
  category: StcwCategory;
  difficulty: StcwDifficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type QuizMode = 10 | 25 | 50;

export type QuizResult = {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  passed: boolean;
  wrongQuestionIds: string[];
};