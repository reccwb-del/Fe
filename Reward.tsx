import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import confetti from "canvas-confetti";
import Mascot from "./Mascot";

interface RewardProps {
  dayNum: number;
  temaName: string;
  onGoHome: () => void;
}

export default function Reward({ dayNum, temaName, onGoHome }: RewardProps) {
  
  useEffect(() => {
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
    onGoHome();
  };

  return (
    <div className="relative min-h-screen bg-pastel-pink flex flex-col items-center justify-center p-4 overflow-hidden font-body select-none">
      
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
        
        <div className="relative h-44 flex items-center justify-center">
          <motion.div
            className="absolute w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            initial={{ y: -150, scale: 0.1, rotate: -200 }}
            animate={{ y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative"
          >
            <Star className="fill-yellow-400 text-yellow-500 w-36 h-36 drop-shadow-[0_8px_0_#D19B14]" />
            <div className="absolute inset-0 flex items-center justify-center font-title text-white text-3xl select-none translate-y-1">
