import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizForm from "@/components/quiz/QuizForm";
import QuizQuestions from "@/components/quiz/QuizQuestions";
import QuizResults from "@/components/quiz/QuizResults";

export type QuizFormData = {
  nome: string;
  email: string;
  empresa: string;
  posicao?: string;
  pais?: string;
  mensagem?: string;
};

export type QuizAnswer = {
  questionIndex: number;
  selectedAnswer: number;
  isCorrect: boolean;
};

type QuizPhase = "form" | "questions" | "results";

const Quiz = () => {
  const [phase, setPhase] = useState<QuizPhase>("form");
  const [formData, setFormData] = useState<QuizFormData | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleFormSubmit = (data: QuizFormData) => {
    setFormData(data);
    setPhase("questions");
  };

  const handleQuizComplete = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers);
    setPhase("results");
  };

  const handleRestartQuiz = () => {
    // Go directly to questions phase, keeping form data
    setPhase("questions");
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-reef-primary from-reef-darker via-reef-dark to-black">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <AnimatePresence mode="wait">
          {phase === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <QuizForm onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {phase === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <QuizQuestions onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <QuizResults
                answers={answers}
                userData={formData}
                onRestart={handleRestartQuiz}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
