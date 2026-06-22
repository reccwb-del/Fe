import React from "react";
import { ArrowLeft, Lock, Star } from "lucide-react";
import Mascot from "./Mascot";

interface DayMapProps {
  daysData: any[];
  currentDay: number;
  completedDays: number[];
  onSelectDay: (dayNum: number) => void;
  onGoBack: () => void;
}

export default function DayMap({
  daysData,
  currentDay,
  completedDays,
  onSelectDay,
  onGoBack,
}: DayMapProps) {
  
  const handleDayClick = (dayNum: number) => {
    if (dayNum <= currentDay) {
      onSelectDay(dayNum);
    } else {
      const ctx = typeof window !== "undefined" && (window.AudioContext || (window as any).webkitAudioContext);
      if (ctx) {
        const clickCtx = new ctx();
        const osc = clickCtx.createOscillator();
        const gain = clickCtx.createGain();
        osc.frequency.setValueAtTime(150, clickCtx.currentTime);
        gain.gain.setValueAtTime(0.1, clickCtx.currentTime);
        osc.connect(gain);
        gain.connect(clickCtx.destination);
        osc.start();
        osc.stop(clickCtx.currentTime + 0.15);
      }
      alert(`¡Hola Aventurero! El Día ${dayNum} todavía está bloqueado. ¡Completa tus misiones anteriores primero! ⭐`);
    }
  };

  const getXAndClass = (day: number) => {
    const r = (day - 1) % 4;
    if (r === 0) return { x: "col-start-1 justify-self-center", alignment: "flex-row" };
    if (r === 1) return { x: "col-start-2 justify-self-center", alignment: "flex-row-reverse" };
    if (r === 2) return { x: "col-start-3 justify-self-center", alignment: "flex-row" };
    return { x: "col-start-2 justify-self-center", alignment: "flex-row-reverse" };
  };

  const getThemeColor = (day: number) => {
    const colors = [
      "bg-[#FFE5A0] border-[#FFD86B] text-amber-950",
      "bg-[#A7D8F5] border-[#597CA3] text-sky-950",
      "bg-[#FFC9DE] border-[#FFA3C1] text-rose-950",
      "bg-[#B8E6C1] border-[#7FD391] text-emerald-950",
      "bg-[#D9C7F5] border-[#9F8FEF] text-violet-950"
    ];
    return colors[(day - 1) % colors.length];
  };

  return (
    <div className="relative min-h-screen bg-pastel-sky flex flex-col font-body select-none pb-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 opacity-20 animate-twinkle"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="sticky top-0 z-30 w-full max-w-md mx-auto bg-white/90 backdrop-blur-md border-b-4 border-sky-200 py-3 px-4 flex items-center justify-between shadow-sm">
        <button
          id="map_goback_btn"
          onClick={() => { onGoBack(); }}
          className="h-11 px-4 bg-amber-100 hover:bg-amber-200 border-2 border-amber-900/10 rounded-2xl flex items-center gap-1.5 text-amber-900 font-bold transition-all text-sm active:scale-95"
        >
          <ArrowLeft size={16} />
          Atrás
        </button>

        <h1 className="font-title text-2xl text-amber-900 flex items-center gap-1">
          🗺️ Mapa de la Fe
        </h1>

        <div className="bg-amber-400 text-amber-950 font-title px-3 py-1 rounded-full text-sm border-2 border-amber-900">
          🌟 {completedDays.length} / 30
        </div>
      </div>

      <div className="flex-1 w-full max-w-md mx-auto px-4 mt-6 z-10">
        <div className="bg-white/95 rounded-2xl p-3 border-2 border-dashed border-[#FFC9DE] text-center text-xs text-sky-800 font-semibold mb-8 shadow-sm">
          🧗‍♀️ ¡Sube desde abajo del mapa hasta la cima de la montaña!
        </div>

        <div className="grid grid-cols-3 gap-y-12 relative py-4">
          <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-3 border-4 border-dashed border-[#A7D8F5]/50 z-0 pointer-events-none" />

          {[...daysData].reverse().map((dayObj) => {
