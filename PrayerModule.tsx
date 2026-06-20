import React, { useEffect, useState } from "react";
import { Sparkles, Heart, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Mascot from "./Mascot";
import { playClickSound, startPrayerMusic, stopPrayerMusic } from "../utils/audio";

interface PrayerModuleProps {
  oracion: string;
  onNext: () => void;
}

export default function PrayerModule({ oracion, onNext }: PrayerModuleProps) {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showSparks, setShowSparks] = useState<number[]>([]);

  // Trigger prayer ambient procedural music on mount
  useEffect(() => {
    // Start C major chord ambient synthesizer
    startPrayerMusic();

    // Clean up sound on unmount to prevent leaking
    return () => {
      stopPrayerMusic();
    };
  }, []);

  // Timer interval for 30s prayer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });

      // Periodically trigger tiny interactive falling stars
      setShowSparks((prev) => [...prev, Date.now()].slice(-8));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFinish = () => {
    // Stop procedural chord synthesis
    stopPrayerMusic();
    playClickSound();
    onNext();
  };

  // Split prayer into sentences/lines for a step-by-step reading look
  const prayerLines = oracion.split(". ").filter((line) => line.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto space-y-6 font-body"
    >
      {/* Title Indicator */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-xs font-bold uppercase tracking-wider">
          <Heart size={12} className="fill-violet-800" />
          Módulo 2: Hablar con Dios
        </div>
        <h2 className="font-title text-3xl text-[#5C458A] leading-tight">
          Momento de Oración
        </h2>
        <p className="text-xs text-violet-600 font-medium">
          Cierra tus ojitos, junta tus manitas y repite conmigo…
        </p>
      </div>

      {/* Mascot folded paws state praying */}
      <div className="flex flex-col items-center">
        <Mascot expression="praying" size={160} />
      </div>

      {/* Ambient Lilac Card Container */}
      <div className="bg-[#D9C7F5]/40 border-8 border-[#D9C7F5] rounded-[32px] p-6 shadow-xl relative overflow-hidden text-center space-y-4">
        
        {/* Falling visual stars element */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {showSparks.map((sparkId) => (
              <motion.div
                key={sparkId}
                initial={{ opacity: 0, y: -10, x: Math.random() * 260 + 20 }}
                animate={{ opacity: [0, 1, 0], y: 160 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.2, ease: "linear" }}
                className="absolute text-yellow-300 text-lg"
              >
                ✨
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Prayer Text Guidance Sequenced nicely */}
        <div className="space-y-3 relative z-10">
          {prayerLines.map((line, index) => {
            const cleanLine = line.endsWith(".") ? line : `${line}.`;
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.8 }}
                className="text-base sm:text-lg font-bold text-violet-950 leading-relaxed"
              >
                {cleanLine}
              </motion.p>
            );
          })}
        </div>

        {/* 30-Second Kids Timer Dial */}
        <div className="pt-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 border-2 border-violet-400 rounded-full py-1.5 px-4 shadow-sm">
            <span className="animate-pulse text-sm">⏱️</span>
            <span className="font-title text-sm text-violet-800">
              Tiempo para meditar: {secondsLeft} segundos
            </span>
            {secondsLeft === 0 && (
              <span className="bg-emerald-400 text-[10px] uppercase font-bold text-white px-2 py-0.5 rounded-full">
                ¡Listo!
              </span>
            )}
          </div>

          {/* Simple horizontal visual loading indicator */}
          <div className="w-40 mx-auto bg-violet-200/50 rounded-full h-2 mt-3 overflow-hidden border border-violet-300">
            <div
              className="bg-violet-400 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(secondsLeft / 30) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Prompt guidance */}
      <div className="text-center font-medium text-xs text-sky-800/80 px-6 leading-tight">
        📱 Respira hondo, habla con Dios con confianza. Él te escucha con alegría infinita. 🦁💛
      </div>

      {/* Amen Action Button */}
      <div className="pt-2">
        <button
          id="prayer_amen_btn"
          onClick={handleFinish}
          className="w-full h-15 bg-[#FFC9DE] border-4 border-rose-900 text-rose-950 rounded-3xl font-title text-2xl shadow-[0_5px_0_#8C1D42] hover:shadow-[0_3px_0_#8C1D42] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="fill-rose-950 stroke-none w-5 h-5" />
          ¡Amén! ✨
        </button>
      </div>

    </motion.div>
  );
}
