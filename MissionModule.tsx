import React, { useState } from "react";
import { Target, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Mascot from "./Mascot";
import { playClickSound } from "../utils/audio";

interface MissionModuleProps {
  dayNum: number;
  misionText: string;
  onCompleteDay: () => void;
}

export default function MissionModule({ dayNum, misionText, onCompleteDay }: MissionModuleProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    const nextVal = !isChecked;
    setIsChecked(nextVal);
    playClickSound();

    if (nextVal) {
      // Small pause to allow children to enjoy the checking animation, then call complete!
      setTimeout(() => {
        onCompleteDay();
      }, 750);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto space-y-6 font-body"
    >
      {/* Header Info */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
          <Target size={12} />
          Módulo 4: Acción Práctica
        </div>
        <h2 className="font-title text-3xl text-emerald-950 leading-none">
          Misión Salvador
        </h2>
        <p className="text-xs text-emerald-700 font-medium font-body leading-none">
          Llevando el amor de Dios al mundo real
        </p>
      </div>

      {/* Mascot celebrations */}
      <div className="flex flex-col items-center">
        <Mascot expression={isChecked ? "celebrating" : "waving"} size={160} />
      </div>

      {/* Mission Description Box */}
      <div className="bg-white border-8 border-[#B8E6C1] rounded-[32px] p-6 shadow-xl relative overflow-hidden">
        
        {/* Sparkle backdrop decoration */}
        <div className="absolute top-2 right-2 text-3xl opacity-20 animate-pulse">🎯</div>
        <div className="absolute bottom-2 left-2 text-2xl opacity-20 animate-bounce">🎈</div>

        <div className="space-y-4 text-center">
          <span className="text-3xl block">🌈</span>
          <h4 className="font-title text-xl text-emerald-900 leading-tight">
            Tu misión para el Día {dayNum}:
          </h4>
          
          <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed px-2">
            "{misionText}"
          </p>

          <p className="text-xs text-slate-500 font-medium">
            ¡Haz esta acción de todo corazón! Dios ama verte ayudar y sonreír.
          </p>
        </div>
      </div>

      {/* GIANT COLORFUL HIGHLY-ROUNDED CHECKBOX DECK */}
      <div className="pt-2">
        <button
          id="mission_completed_checkbox"
          onClick={handleCheckboxToggle}
          className={`w-full py-5 px-6 rounded-3xl border-4 flex items-center justify-center gap-3 shadow-md transition-all active:scale-95 cursor-pointer ${
            isChecked
              ? "bg-[#B8E6C1] border-emerald-600 text-emerald-905 scale-102"
              : "bg-white border-slate-350 hover:bg-slate-50 text-slate-700 hover:border-slate-400"
          }`}
        >
          {/* Animated custom check indicator circle */}
          <div
            className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transform transition-transform duration-300 ${
              isChecked
                ? "bg-emerald-600 border-white rotate-12 scale-110"
                : "border-slate-300 bg-slate-100"
            }`}
          >
            {isChecked && <CheckCircle size={18} className="text-white stroke-[4]" />}
          </div>

          <span className="font-title text-xl sm:text-2xl drop-shadow-sm">
            {isChecked ? "¡MISIÓN COMPLETADA! 🌟" : "¡Misión cumplida!"}
          </span>
        </button>
      </div>

      {/* Helper guide */}
      <div className="text-center font-medium text-[11px] text-slate-505 px-6 leading-tight">
        ✨ Completa la misión en el mundo real, presiona el botón arriba para obtener tu estrella de hoy de forma mágica.
      </div>

    </motion.div>
  );
}
