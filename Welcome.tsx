import React from "react";
import Mascot from "./Mascot";
import { Sparkles, Calendar, Trophy, Map } from "lucide-react";
import { playClickSound } from "../utils/audio";
import { DayData } from "../data/days";

interface WelcomeProps {
  currentDay: number;
  starsCount: number;
  activeDayData: DayData;
  onComenzar: () => void;
  onViewMap: () => void;
  onOpenSettings: () => void;
}

export default function Welcome({
  currentDay,
  starsCount,
  activeDayData,
  onComenzar,
  onViewMap,
  onOpenSettings,
}: WelcomeProps) {
  const handleStart = () => {
    playClickSound();
    onComenzar();
  };

  const handleMap = () => {
    playClickSound();
    onViewMap();
  };

  const handleSettings = () => {
    playClickSound();
    onOpenSettings();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-4 bg-pastel-sky overflow-hidden font-body select-none">
      
      {/* Decorative floating animated background elements */}
      {/* Dynamic stars elements with twinkling animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-twinkle"
            style={{
              top: `${Math.random() * 80 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `scale(${Math.random() * 0.7 + 0.5})`,
              fontSize: `${Math.random() * 12 + 16}px`,
            }}
          >
            ⭐
          </div>
        ))}
        {/* Soft pastel-colored background clouds */}
        <div className="absolute top-[10%] left-[5%] w-24 h-8 bg-white opacity-40 rounded-full blur-sm" />
        <div className="absolute top-[35%] right-[8%] w-32 h-10 bg-white opacity-30 rounded-full blur-sm" />
        <div className="absolute bottom-[20%] left-[8%] w-28 h-9 bg-white opacity-40 rounded-full blur-sm" />
      </div>

      {/* Top Header Row */}
      <div className="w-full max-w-md flex justify-between items-center z-10 pt-2 px-2">
        {/* Star Badge */}
        <div className="bg-white/90 border-4 border-[#FFD86B] rounded-full py-1.5 px-4 flex items-center gap-2 shadow-md">
          <span className="text-xl">⭐</span>
          <span className="font-title text-amber-900 text-lg">
            {starsCount} / 30 estrellas
          </span>
        </div>

        {/* Gear Button */}
        <button
          id="welcome_settings_btn"
          onClick={handleSettings}
          className="w-12 h-12 bg-white/95 hover:bg-[#FFE5A0] border-4 border-amber-900/10 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform cursor-pointer text-amber-900"
          title="Ajustes"
        >
          ⚙️
        </button>
      </div>

      {/* Central Hero Column */}
      <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center text-center px-4 my-4 z-10">
        
        {/* Sparkly Cloud Title Bracket */}
        <div className="relative mb-2">
          <div className="absolute -top-6 -left-6 text-2xl animate-bounce">🎈</div>
          <div className="absolute -bottom-2 -right-4 text-3xl animate-pulse">✨</div>
          <h1 className="font-title text-4xl sm:text-5xl text-amber-900 drop-shadow-sm tracking-wide leading-tight">
            Aventureros<br />
            <span className="text-sky-700">de la Fe</span>
          </h1>
        </div>

        {/* Happy Subtitle */}
        <p className="text-[#597CA3] font-medium text-sm sm:text-base px-6 mb-4">
          ¡Vamos a comenzar nuestro viaje de fe de 30 días!
        </p>

        {/* Beautiful Interactive Waving Mascot */}
        <div className="my-2 relative group cursor-pointer">
          <div className="absolute -inset-1 rounded-full bg-yellow-100 opacity-60 blur-md animate-pulse" />
          <Mascot expression="waving" size={210} className="relative z-10" />
        </div>

        {/* Active Day Indicator Info Box */}
        <div className="w-full bg-white/95 border-4 border-[#A7D8F5] rounded-3xl p-4 shadow-lg mb-6 max-w-sm">
          <div className="flex items-center justify-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-widest">
            <Calendar size={14} />
            <span>Siguiente parada de hoy:</span>
          </div>
          <h2 className="font-title text-2xl text-amber-900 mt-1">
            Día {currentDay}: {activeDayData?.tema || "La Creación"}
          </h2>
          <p className="text-xs text-sky-600/90 font-medium mt-1">
            ✨ ¡Completa la aventura de hoy para ganar tu estrella!
          </p>
        </div>

        {/* Action Buttons Column */}
        <div className="w-full space-y-3 max-w-xs">
          {/* GIANT BOUNCY START BUTTON */}
          <button
            id="welcome_comenzar_btn"
            onClick={handleStart}
            className="w-full py-4 bg-[#FFD86B] border-4 border-amber-950 text-amber-950 rounded-3xl font-title text-2xl sm:text-3xl shadow-[0_6px_0_#9F7113] hover:shadow-[0_4px_0_#9F7113] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-3 cursor-pointer"
          >
            <Sparkles className="fill-amber-900 stroke-none animate-spin-slow w-6 h-6" />
            ¡COMENZAR!
          </button>

          {/* VER MI MAPA BUTTON */}
          <button
            id="welcome_ver_mapa_btn"
            onClick={handleMap}
            className="w-full py-3 bg-[#B8E6C1] border-4 border-emerald-900 text-emerald-950 rounded-3xl font-title text-lg shadow-[0_4px_0_#0D5B21] hover:shadow-[0_2px_0_#0D5B21] hover:translate-y-0.5 active:translate-y-1 transition-all button-bounce-hover flex items-center justify-center gap-2 cursor-pointer"
          >
            <Map size={18} />
            Ver mi mapa
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="w-full text-center py-2 text-xs text-sky-800/80 font-semibold z-10">
        🏔️ Un viaje diario con el León Valiente • Día {currentDay} de 30
      </div>
    </div>
  );
}
