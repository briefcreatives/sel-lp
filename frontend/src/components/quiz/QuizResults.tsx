import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, X, Award, ExternalLink, Gift, RefreshCw } from "lucide-react";
import type { QuizAnswer, QuizFormData } from "@/pages/Quiz";
import { useEffect } from "react";
import confetti from "canvas-confetti";

type QuizResultsProps = {
  answers: QuizAnswer[];
  userData: QuizFormData | null;
  onRestart: () => void;
};

const questions = [
  {
    question: 'O que significa "flexibilidade" no sistema elétrico?',
    correctAnswer: "Ajustar consumo/produção em tempo real às necessidades da rede",
  },
  {
    question: "Quais destes são considerados DER residenciais?",
    correctAnswer: "Solar PV, BESS residenciais, bombas de calor, EVs",
  },
  {
    question:
      "Quantos carros elétricos (BEV+PHEV) existirão aproximadamente na EU em 2030?",
    correctAnswer: "50 000 000",
  },
  {
    question:
      "Com um HEMS e tarifas dinâmicas, qual a poupança típica anual numa casa média?",
    correctAnswer: "5–20%",
  },
];

const QuizResults = ({ answers, userData, onRestart }: QuizResultsProps) => {
  const totalQuestions = answers.length;
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  // Trigger confetti effect if score is 50% or higher
  useEffect(() => {
    if (scorePercentage >= 50) {
      // Initial burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00FF94', '#00E5FF', '#FFFFFF', '#FFD700'],
      });

      // Side bursts
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#00FF94', '#00E5FF', '#FFFFFF'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#00FF94', '#00E5FF', '#FFFFFF'],
        });
      }, 250);

      // Final burst for perfect score
      if (scorePercentage === 100) {
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#00FF94', '#00E5FF', '#FFFFFF', '#FFD700', '#FF6B9D'],
          });
        }, 500);
      }
    }
  }, [scorePercentage]);

  const getScoreMessage = () => {
    if (scorePercentage === 100) {
      return {
        title: "Perfeito! 🎉",
        message: "Excelente conhecimento sobre gestão de energia!",
        color: "text-white",
      };
    } else if (scorePercentage >= 75) {
      return {
        title: "Muito Bom! 👏",
        message: "Tem um ótimo conhecimento sobre o tema!",
        color: "text-green-400",
      };
    } else if (scorePercentage >= 50) {
      return {
        title: "Bom Trabalho! 👍",
        message: "Está no caminho certo para dominar o tema!",
        color: "text-yellow-400",
      };
    } else {
      return {
        title: "Continue a Aprender! 📚",
        message: "Há muito mais para descobrir sobre gestão de energia!",
        color: "text-orange-400",
      };
    }
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-reef-green/20 border-4 border-reef-green mb-6">
          <Award className="w-12 h-12 text-yellow-400" />
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${scoreMessage.color}`}>
          {scoreMessage.title}
        </h1>
        <p className="text-xl text-gray-300 mb-4">{scoreMessage.message}</p>

        <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
          <p className="text-lg text-gray-400 mb-1">Resultado Final</p>
          <p className="text-5xl font-bold text-white">
            {correctAnswers}
            <span className="text-2xl text-gray-400">/{totalQuestions}</span>
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {scorePercentage.toFixed(0)}% de acertos
          </p>
        </div>
      </motion.div>

      {/* Detailed Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Resumo das Respostas
        </h2>

        <div className="space-y-6">
          {answers.map((answer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`
                p-4 rounded-xl border-2 transition-all
                ${
                  answer.isCorrect
                    ? "bg-green-500/10 border-green-500/50"
                    : "bg-red-500/10 border-red-500/50"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${
                    answer.isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                  }
                `}
                >
                  {answer.isCorrect ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <X className="w-5 h-5 text-white" />
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-white font-semibold mb-2">
                    Pergunta {index + 1}: {questions[index].question}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`
                      text-sm font-medium
                      ${answer.isCorrect ? "text-green-400" : "text-red-400"}
                    `}
                    >
                      {answer.isCorrect ? "Correto!" : "Incorreto"}
                    </span>
                    {!answer.isCorrect && (
                      <span className="text-sm text-gray-400">
                        • Resposta correta: {questions[index].correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-reef-green/20 to-reef-cyan/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-reef-green/30 mb-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Obrigado por participar no Quiz REEF EM!
        </h2>
        <p className="text-lg text-gray-300">
          {userData?.nome && `${userData.nome}, `}
          esperamos que tenha gostado de testar os seus conhecimentos.
        </p>
      </motion.div>

      {/* Prize Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-500/30 mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Gift className="w-12 h-12 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ganhe um Brinde Exclusivo!
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong>Visite-nos no stand 5.D63</strong> e assista à nossa demonstração
              para receber um brinde exclusivo REEF EM!
            </p>
            <p className="text-sm text-yellow-400 mt-2">
              * Limitado ao stock existente
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Button
          onClick={() => window.location.href = "/"}
          className="bg-reef-green hover:bg-reef-green/90 text-white font-semibold px-8 py-6 text-lg group"
          size="lg"
        >
          Saiba Mais Sobre REEF EM
          <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          onClick={onRestart}
          variant="outline"
          className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
          size="lg"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Refazer Quiz
        </Button>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-center text-gray-400 text-sm mt-8"
      >
        Os seus dados foram enviados com sucesso. Entraremos em contacto em breve.
      </motion.p>
    </div>
  );
};

export default QuizResults;
