import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import type { QuizAnswer } from "@/pages/Quiz";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question: 'O que significa "flexibilidade" no sistema elétrico?',
    options: [
      "Ajustar consumo/produção em tempo real às necessidades da rede",
      "Construir mais centrais elétricas a gás",
      "Mudar toda a produção para painéis solares",
      "Usar apenas baterias utility-scale",
    ],
    correctAnswer: 0,
  },
  {
    question: "Quais destes são considerados DER residenciais?",
    options: [
      "Iluminação LED",
      "Esquentadores e caldeiras",
      "Chaleiras, frigoríficos, micro-ondas, máquinas de café",
      "Solar PV, BESS residenciais, bombas de calor, EVs",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Quantos carros elétricos (BEV+PHEV) existirão aproximadamente na EU em 2030?",
    options: ["500 000", "5 000 000", "50 000 000", "500 000 000"],
    correctAnswer: 2,
  },
  {
    question:
      "Com um HEMS e tarifas dinâmicas, qual a poupança típica anual numa casa média?",
    options: ["0%", "5–20%", "60–70%", "100%"],
    correctAnswer: 1,
  },
];

type QuizQuestionsProps = {
  onComplete: (answers: QuizAnswer[]) => void;
};

const QuizQuestions = ({ onComplete }: QuizQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showFeedback, setShowFeedback] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowFeedback(true);

    // Auto advance after 1.5 seconds on correct answer, or allow manual navigation
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          handleNext();
        }
      }, 1500);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      // Quiz completed
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFeedback(false);
    }
  };

  const handleComplete = () => {
    const quizAnswers: QuizAnswer[] = selectedAnswers.map(
      (answer, index) => ({
        questionIndex: index,
        selectedAnswer: answer ?? -1,
        isCorrect: answer === questions[index].correctAnswer,
      })
    );
    onComplete(quizAnswers);
  };

  const isAnswered = selectedAnswers[currentQuestion] !== null;
  const selectedAnswer = selectedAnswers[currentQuestion];
  const correctAnswer = questions[currentQuestion].correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Quiz <span className="text-reef-green">REEF EM</span>
        </h1>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
        >
          {/* Question */}
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === correctAnswer;
              const showCorrect = showFeedback && isCorrect;
              const showIncorrect = showFeedback && isSelected && !isCorrect;

              return (
                <motion.button
                  key={index}
                  onClick={() => !showFeedback && handleAnswerSelect(index)}
                  disabled={showFeedback}
                  whileHover={!showFeedback ? { scale: 1.02 } : {}}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  className={`
                    w-full p-4 rounded-xl text-left transition-all duration-300
                    flex items-center justify-between group
                    ${
                      showCorrect
                        ? "bg-green-500/20 border-2 border-green-500"
                        : showIncorrect
                        ? "bg-red-500/20 border-2 border-red-500"
                        : isSelected
                        ? "bg-reef-green/20 border-2 border-reef-green"
                        : "bg-white/5 border-2 border-white/10 hover:border-reef-green/50"
                    }
                    ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  <span
                    className={`
                    text-base md:text-lg
                    ${
                      showCorrect || showIncorrect
                        ? "text-white font-semibold"
                        : "text-gray-200"
                    }
                  `}
                  >
                    {option}
                  </span>

                  {showCorrect && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <Check className="w-6 h-6 text-green-500" />
                    </motion.div>
                  )}

                  {showIncorrect && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <X className="w-6 h-6 text-red-500" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleComplete}
                disabled={!isAnswered}
                className="bg-reef-green hover:bg-reef-green/90 text-white font-semibold disabled:opacity-50"
              >
                Ver Resultados
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-reef-green hover:bg-reef-green/90 text-white font-semibold disabled:opacity-50"
              >
                Próxima
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Question Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentQuestion(index);
              setShowFeedback(false);
            }}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${
                index === currentQuestion
                  ? "bg-white w-8"
                  : selectedAnswers[index] !== null
                  ? "bg-white/50"
                  : "bg-white/20"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestions;
