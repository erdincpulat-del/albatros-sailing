"use client";

import type { QuizMode, StcwQuestion } from "./quiz-types";
import { supabase } from "../supabase-client";
type DbQuestion = {
  question_code: string;
  category: StcwQuestion["category"];
  difficulty: StcwQuestion["difficulty"];
  question: string;
  options: string[] | string;
  correct_answer: number;
  explanation: string;
};

export async function getStcwQuestionsFromSupabase(
  mode: QuizMode
): Promise<StcwQuestion[]> {
  const { data, error } = await supabase
    .from("stcw_questions")
    .select(
      "question_code, category, difficulty, question, options, correct_answer, explanation"
    );

  if (error) {
    console.error("STCW Supabase error:", error);
    return [];
  }

  const rows = (data || []) as DbQuestion[];

  return rows
  .sort(() => Math.random() - 0.5)
  .map((q) => ({
      id: q.question_code,
      category: q.category,
      difficulty: q.difficulty,

      type: "theory",
      level: "basic",
      scenario: undefined,

      question: q.question,
      options:
        typeof q.options === "string" ? JSON.parse(q.options) : q.options,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
    }));
}