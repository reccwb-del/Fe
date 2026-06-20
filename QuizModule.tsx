import React, { useState } from "react";
import { HelpCircle, Star, Sparkles, CheckCircle2, AlertCircle, RefreshCw, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import Mascot from "./Mascot";
import { QuizQuestion } from "../data/days";
import { playClickSound, playCorrectSound, playIncorrectSound } from "../utils/audio";

interface QuizModuleProps {
  quizQuestions: QuizQuestion[];
  onNext: () => void;
}

export default function QuizModule({ quizQuestions, onNext }: QuizModuleProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [mascotExp, setMascotExp] = useState<"thinking" | "celebrating">("thinking");

  const currentQuestion = quizQuestions[currentIdx];
  const isCorrect = selectedOpt === currentQuestion?.correcta;

  const handleOptionClick = (optIdx: number) => {
    if (hasAnswered) return; // Prevent multiple clicks on the same question

    setSelectedOpt(optIdx);
    setHasAnswered(true);

    if (optIdx === currentQuestion.correcta) {
      // Correct answer actions!
      setMascotExp("celebrating");
      playCorrectSound();

      // Trigger colorful kid-safe confetti fireworks!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          colors: ["#FFE5A0", "#A7D8F5", "#FFC9DE", "#B8E6C1", "#D9C7F5", "#FFD86B"],
          origin: { y: 0.7 }
        });
      } catch (err) {
        console.warn("Confetti error:", err);
      }
    } else {
      // Near miss!
      setMascotExp("thinking");
      playIncorrectSound();
    }
  };

  const handleNextQuestion = () => {
    playClickSound();
    // Move to next question or proceed to next module
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setHasAnswered(false);
      setMascotExp("thinking");
    } else {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto space-y-6 font-body"
    >
      {/* Title Segment */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-105 bg-[#FFE5A0] text-amber-950 rounded-full text-xs font-bold uppercase tracking-wider">
          <HelpCircle size={12} />
          Módulo 3: Trivia de Campeones
        </div>
        <h2 className="font-title text-3xl text-amber-900 leading-none">
          ¿Cuánto Aprendimos?
        </h2>
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i < currentIdx
                  ? "w-6 bg-[#B8E6C1]" // already completed
                  : i === currentIdx
                  ? "w-8 bg-[#FFD86B] border border-amber-500 animate-pulse" // active
                  : "w-2.5 bg-slate-200" // future
              }`}
            />
          ))}
          <span className="text-xs text-sky-800 font-bold ml-1">
            Pregunta {currentIdx + 1} de {quizQuestions.length}
          </span>
        </div>
      </div>

      {/* Interactive Mascot Reacting to Correct/Incorrect answers */}
      <div className="flex flex-col items-center">
        <Mascot expression={mascotExp} size={150} />
      </div>

      {/* Main Question Card */}
      <div className="bg-white border-8 border-[#A7D8F5] rounded-[32px] p-6 shadow-xl space-y-4">
        
        {/* The Question Text */}
        <h3 className="font-title text-xl text-sky-950 text-center leading-snug px-1">
          {currentQuestion?.p}
        </h3>

        {/* 3 Large Rounded Options */}
        <div className="space-y-3">
          {currentQuestion?.o.map((optionText, optIdx) => {
            const isChosen = selectedOpt === optIdx;
            const isCorrectAnswer = optIdx === currentQuestion.correcta;

            let buttonStyle = "bg-[#A7D8F5]/20 hover:bg-[#A7D8F5]/40 border-[#A7D8F5] text-slate-700";
            if (hasAnswered) {
              if (isCorrectAnswer) {
                // Correct answer is highlighted green
                buttonStyle = "bg-[#B8E6C1]/50 border-[#62C979] text-emerald-950 font-bold scale-[1.01]";
              } else if (isChosen) {
                // Incorrect chosen answer is highlighted soft red/pink
                buttonStyle = "bg-[#FFC9DE]/50 border-[#FFA3C1] text-rose-950 text-slate-500 line-through";
              } else {
                // Other options muted
                buttonStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
              }
            }

            return (
              <button
                key={optIdx}
                id={`quiz_opt_btn_${optIdx}`}
                disabled={hasAnswered}
                onClick={() => handleOptionClick(optIdx)}
                className={`w-full py-3.5 px-5 rounded-[22px] border-4 text-left font-semibold text-sm transition-all flex items-center justify-between gap-3 ${buttonStyle} ${
                  !hasAnswered ? "active:scale-95 cursor-pointer" : ""
                }`}
              >
                <span>{optionText}</span>
                
                {/* Visual state icons */}
                {hasAnswered && isCorrectAnswer && (
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                )}
                {hasAnswered && isChosen && !isCorrectAnswer && (
                  <AlertCircle size={18} className="text-rose-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Informative Feedback Alert Area */}
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3.5 rounded-2xl border-2 text-xs font-semibold text-center flex flex-col items-center justify-center gap-1 ${
              isCorrect
                ? "bg-[#B8E6C1]/20 border-emerald-300 text-emerald-900"
                : "bg-[#FFE5A0]/35 border-amber-300 text-amber-950"
            }`}
          >
            {isCorrect ? (
              <>
                <span className="text-sm">🎉 ¡EXCELENTE! 🎉</span>
                <span>¡Esa es la respuesta correcta! Has respondido súper bien.</span>
              </>
            ) : (
              <>
                <span className="text-sm">🦁 "¡Casi listo!"</span>
                <span>La respuesta correcta es: <strong>{currentQuestion.o[currentQuestion.correcta]}</strong>. ¡No te preocupes, sigues aprendiendo magníficamente! ✨</span>
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Progress Trigger button */}
      {hasAnswered && (
        <div className="pt-2">
          <button
            id="quiz_proceed_btn"
            onClick={handleNextQuestion}
            className="w-full h-15 bg-[#B8E6C1] border-4 border-emerald-900 text-emerald-950 rounded-3xl font-title text-xl shadow-[0_5px_0_#14652A] hover:shadow-[0_3px_0_#14652A] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-2 cursor-pointer"
          >
            {currentIdx < quizQuestions.length - 1 ? (
              <>
                Siguiente pregunta
                <ChevronRight size={22} className="stroke-[3]" />
              </>
            ) : (
              <>
                Siguiente Módulo
                <ChevronRight size={22} className="stroke-[3]" />
              </>
            )}
          </button>
        </div>
      )}

    </motion.div>
  );
}
