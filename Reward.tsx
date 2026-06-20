import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Trophy, Star, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";
import Mascot from "./Mascot";
import { playClickSound, playStarSound } from "../utils/audio";

interface RewardProps {
  dayNum: number;
  temaName: string;
  onGoHome: () => void;
}

export default function Reward({ dayNum, temaName, onGoHome }: RewardProps) {
  
  // Clean play effects on reward mount
  useEffect(() => {
    // Play arpeggio
    playStarSound();

    // Trigger nice rich celebratory confetti bursts left & right
    try {
      const end = Date.now() + 1.2 * 1000;

      const interval = setInterval(() => {
        if (Date.now() > end) {
          return clearInterval(interval);
        }

        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: { x: Math.random() * 0.4 + 0.1, y: Math.random() * 0.3 + 0.3 }
        });
        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: { x: Math.random() * 0.4 + 0.5, y: Math.random() * 0.3 + 0.3 }
        });
      }, 250);

      return () => clearInterval(interval);
    } catch (e) {
      console.warn("Reward confetti error:", e);
    }
  }, []);

  const handleFinish = () => {
    playClickSound();
    onGoHome();
  };

  return (
    <div className="relative min-h-screen bg-pastel-pink flex flex-col items-center justify-center p-4 overflow-hidden font-body select-none">
      
      {/* Stars back drop element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 opacity-20 animate-twinkle"
            style={{
              top: `${Math.random() * 85}%`,
              left: `${Math.random() * 85}%`,
              transform: `scale(${Math.random() * 0.8 + 0.7})`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white border-8 border-[#FFE5A0] rounded-[36px] p-6 text-center shadow-2xl relative z-10 space-y-6">
        
        {/* Falling Giant Golden Star (Framer Motion) */}
        <div className="relative h-44 flex items-center justify-center">
          
          {/* Animated Background Rays */}
          <motion.div
            className="absolute w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Falling / Scaling Star element */}
          <motion.div
            initial={{ y: -150, scale: 0.1, rotate: -200 }}
            animate={{ y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative"
          >
            <Star className="fill-yellow-400 text-yellow-500 w-36 h-36 drop-shadow-[0_8px_0_#D19B14]" />
            {/* Embedded glowing number */}
            <div className="absolute inset-0 flex items-center justify-center font-title text-white text-3xl select-none translate-y-1">
              ⭐
            </div>
          </motion.div>
        </div>

        {/* Mascot Jumping & Celebrating! */}
        <div className="flex justify-center -mt-4">
          <Mascot expression="celebrating" size={130} />
        </div>

        {/* Text Announcements */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="font-title text-4xl text-amber-900 leading-tight"
          >
            ¡Felicitaciones!
          </motion.h1>
          
          <h2 className="font-title text-xl text-sky-800">
            Terminaste el Día {dayNum}
          </h2>

          <p className="text-sm text-slate-600 font-semibold px-4 font-body leading-relaxed">
            ¡Ganaste tu estrella del día! Ya tienes una estrella reluciente para iluminar tu mapa de promesas. 🌟
          </p>
        </div>

        {/* Action Button: Volver al inicio */}
        <div className="pt-2">
          <button
            id="reward_gohome_btn"
            onClick={handleFinish}
            className="w-full py-4 bg-[#B8E6C1] border-4 border-emerald-900 text-emerald-950 rounded-3xl font-title text-2xl shadow-[0_5px_0_#14652A] hover:shadow-[0_3px_0_#14652A] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-2 cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>

        {/* Ribbon decoration at bottom of cards */}
        <div className="bg-amber-100 border border-amber-200 py-1.5 px-4 rounded-xl text-[10px] uppercase tracking-widest font-bold text-amber-905">
          🏆 Día completado: "{temaName}"
        </div>

      </div>

    </div>
  );
}
