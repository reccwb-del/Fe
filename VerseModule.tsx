import React from "react";
import { BookOpen, ChevronRight, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import Mascot from "./Mascot";
import { playClickSound } from "../utils/audio";

interface VerseModuleProps {
  dayNum: number;
  tema: string;
  versiculo: {
    ref: string;
    texto: string;
  };
  onNext: () => void;
}

export default function VerseModule({ dayNum, tema, versiculo, onNext }: VerseModuleProps) {
  const handleProceed = () => {
    playClickSound();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto space-y-6 font-body"
    >
      {/* Module Title Indicator */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider">
          <BookOpen size={12} />
          Módulo 1: Palabra de Dios
        </div>
        <h2 className="font-title text-3xl text-amber-900 leading-tight">
          El Versículo de Hoy
        </h2>
        <p className="text-xs text-sky-700 font-medium font-body leading-none">
          Día {dayNum} • {tema}
        </p>
      </div>

      {/* Lovable Reading Mascot illustration and text bubble */}
      <div className="flex flex-col items-center">
        <Mascot expression="reading" size={170} />
        
        {/* Soft cartoon-style dialogue block */}
        <div className="bg-[#FFE5A0] border-4 border-amber-900/15 rounded-[24px] p-2 px-4 shadow-sm text-center -mt-2 relative z-10">
          <p className="text-xs font-bold text-amber-950">
            🦁 El León Valiente dice: "¡Vamos a leer juntos la Biblia!"
          </p>
        </div>
      </div>

      {/* Main Holy Verse Card styled elegantly for kids readability */}
      <div className="bg-white border-8 border-[#FFE5A0] rounded-[32px] p-6 shadow-xl relative overflow-hidden">
        
        {/* Transparent bible watermark */}
        <div className="absolute -bottom-6 -right-6 text-yellow-100 text-9xl font-bold select-none opacity-40">
          📖
        </div>

        <div className="space-y-4 relative z-10">
          {/* Beautiful quotation decoration */}
          <div className="text-amber-300 text-4xl font-title leading-none">“</div>
          
          <p className="text-lg sm:text-xl text-amber-950 font-bold leading-relaxed text-center px-2">
            {versiculo.texto}
          </p>
          
          <div className="text-right text-amber-300 text-4xl font-title leading-none">”</div>

          {/* Reference indicator bubble */}
          <div className="flex justify-center">
            <span className="bg-[#A7D8F5] text-sky-950 font-title text-sm py-1.5 px-5 rounded-full border-2 border-sky-400 shadow-sm">
              📍 {versiculo.ref}
            </span>
          </div>
        </div>
      </div>

      {/* Instructions helper tooltip */}
      <div className="flex items-center gap-2 justify-center text-xs text-sky-800/80 font-semibold px-4 text-center leading-tight">
        <HelpCircle size={14} className="text-sky-600 flex-shrink-0" />
        <span>Léelo en voz alta una o dos veces con un familiar para guardarlo en tu corazón.</span>
      </div>

      {/* Bottom giant proceed button */}
      <div className="pt-2">
        <button
          id="verse_next_btn"
          onClick={handleProceed}
          className="w-full h-15 bg-[#B8E6C1] border-4 border-emerald-900 text-emerald-950 rounded-3xl font-title text-xl shadow-[0_5px_0_#14652A] hover:shadow-[0_3px_0_#14652A] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-2 cursor-pointer"
        >
          Siguiente paso
          <ChevronRight size={22} className="stroke-[3]" />
        </button>
      </div>

    </motion.div>
  );
}
