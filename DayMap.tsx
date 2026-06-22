import React from "react";
import { ArrowLeft, Lock, Star, Play, Award } from "lucide-react";
import Mascot from "./Mascot";

interface DayMapProps {
  daysData: DayData[];
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
    playClickSound();
    // Allow starting the day if it's unlocked (i.e. <= currentDay)
    if (dayNum <= currentDay) {
      onSelectDay(dayNum);
    } else {
      // Little alert or sound
      const ctx = typeof window !== "undefined" && (window.AudioContext || (window as any).webkitAudioContext);
      if (ctx) {
        // Soft error tone
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

  // Zigzag pattern for column layout
  // Pattern represents the left shift % (approximate look)
  const getXAndClass = (day: number) => {
    const r = (day - 1) % 4;
    if (r === 0) return { x: "col-start-1 justify-self-center", alignment: "flex-row" };
    if (r === 1) return { x: "col-start-2 justify-self-center", alignment: "flex-row-reverse" };
    if (r === 2) return { x: "col-start-3 justify-self-center", alignment: "flex-row" };
    return { x: "col-start-2 justify-self-center", alignment: "flex-row-reverse" };
  };

  const getThemeColor = (day: number) => {
    // Return custom background badge colors to make it look like Candyland candy path
    const colors = [
      "bg-[#FFE5A0] border-[#FFD86B] text-amber-950", // yellow
      "bg-[#A7D8F5] border-[#597CA3] text-sky-950",  // blue
      "bg-[#FFC9DE] border-[#FFA3C1] text-rose-950", // pink
      "bg-[#B8E6C1] border-[#7FD391] text-emerald-950", // green
      "bg-[#D9C7F5] border-[#9F8FEF] text-violet-950" // lilac
    ];
    return colors[(day - 1) % colors.length];
  };

  return (
    <div className="relative min-h-screen bg-pastel-sky flex flex-col font-body select-none pb-12">
      
      {/* MAP BACKGROUND DECORATIONS */}
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

      {/* STICKY TOP NAVIGATION BAR */}
      <div className="sticky top-0 z-30 w-full max-w-md mx-auto bg-white/90 backdrop-blur-md border-b-4 border-sky-200 py-3 px-4 flex items-center justify-between shadow-sm">
        <button
          id="map_goback_btn"
          onClick={() => { playClickSound(); onGoBack(); }}
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

      {/* SCROLLABLE MAP BODY */}
      <div className="flex-1 w-full max-w-md mx-auto px-4 mt-6 z-10">
        
        {/* Help Banner */}
        <div className="bg-white/95 rounded-2xl p-3 border-2 border-dashed border-[#FFC9DE] text-center text-xs text-sky-800 font-semibold mb-8 shadow-sm">
          🧗‍♀️ ¡Sube desde abajo del mapa hasta la cima de la montaña!
        </div>

        {/* MAP TRAIL */}
        {/* We reverse the array to display Day 30 at the top and Day 1 at the bottom so children literally CLIMB up! */}
        <div className="grid grid-cols-3 gap-y-12 relative py-4">
          
          {/* Continuous central connection vector path */}
          <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-3 border-4 border-dashed border-[#A7D8F5]/50 z-0 pointer-events-none" />

          {/* Render Days 30 down to 1 */}
          {[...daysData].reverse().map((dayObj) => {
            const dayNum = dayObj.dia;
            const isCompleted = completedDays.includes(dayNum);
            const isLocked = dayNum > currentDay;
            const isCurrent = dayNum === currentDay;
            const { x, alignment } = getXAndClass(dayNum);
            const colorClass = getThemeColor(dayNum);

            return (
              <div
                key={dayNum}
                className={`${x} z-10 flex flex-col items-center relative col-span-1`}
              >
                {/* Visual Connector / Star Indicator */}
                <div className="relative">
                  
                  {/* Current mascot float indicator */}
                  {isCurrent && (
                    <div className="absolute -top-16 -left-1/2 right-1/2 translate-x-1/4 z-20 pointer-events-none flex flex-col items-center">
                      <div className="bg-amber-100 text-amber-950 text-[10px] font-black py-0.5 px-2 rounded-full border border-amber-700 shadow-md animate-bounce flex items-center gap-0.5 whitespace-nowrap">
                        🦁 ¡Estás aquí!
                      </div>
                      <Mascot expression="thinking" size={62} className="animate-pulse" />
                    </div>
                  )}

                  {/* Circle button representing map nodes */}
                  <button
                    id={`map_day_btn_${dayNum}`}
                    onClick={() => handleDayClick(dayNum)}
                    className={`w-15 h-15 rounded-full border-4 flex items-center justify-center font-title text-xl shadow-lg relative cursor-pointer group active:scale-90 transition-transform ${
                      isLocked
                        ? "bg-slate-300 border-slate-400 text-slate-500"
                        : isCurrent
                        ? "bg-[#FFD86B] border-amber-500 text-amber-950 scale-110 ring-4 ring-yellow-300/40"
                        : colorClass
                    }`}
                  >
                    {isLocked ? (
                      <Lock size={16} className="text-slate-500" />
                    ) : isCompleted ? (
                      <Star className="fill-yellow-400 text-yellow-600 w-7 h-7 drop-shadow-md animate-pulse" />
                    ) : (
                      <span>{dayNum}</span>
                    )}

                    {/* Miniature flag for milestones (e.g. Day 10, 20, 30) */}
                    {dayNum % 10 === 0 && (
                      <div className="absolute -top-3 -right-2 bg-rose-500 border border-white rounded-full p-1 text-[8px] text-white font-bold">
                        🏆
                      </div>
                    )}
                  </button>
                </div>

                {/* Day label details */}
                <div className={`mt-2 text-center w-28 absolute -bottom-8 ${isCurrent ? "font-bold text-amber-900" : "text-sky-900/80 font-medium"}`}>
                  <span className="text-[10px] block font-semibold leading-none uppercase text-sky-800">
                    DÍA {dayNum}
                  </span>
                  <span className="text-[11px] leading-tight block truncate">
                    {dayObj.tema}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* CROWNING CEREMONY BADGE AT MAP SUMMIT */}
        <div className="mt-20 mb-8 p-6 bg-white/95 rounded-[32px] border-4 border-[#FFD86B] text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-2xl">🏆</div>
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FFE5A0] flex items-center justify-center text-3xl">
            👑
          </div>
          <h3 className="font-title text-xl text-amber-900 mt-2">¡Cumbre de Campeones!</h3>
          <p className="text-xs text-amber-800/90 font-medium max-w-xs mx-auto mt-1">
            ¡Sigue adelante cada día para completar los 30 días y graduarte de la escuela de Aventureros de la Fe!
          </p>
        </div>

      </div>
    </div>
  );
}
