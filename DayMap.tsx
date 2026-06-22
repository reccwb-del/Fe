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

export default function DayMap({ daysData, currentDay, completedDays, onSelectDay, onGoBack }: DayMapProps) {
  return (
    <div className="relative min-h-screen bg-pastel-sky flex flex-col p-4">
      <button onClick={onGoBack} className="p-2 bg-amber-100 rounded-xl mb-4"><ArrowLeft /></button>
      <div className="grid grid-cols-3 gap-6">
        {[...daysData].reverse().map((day) => (
          <button key={day.dia} onClick={() => day.dia <= currentDay && onSelectDay(day.dia)} className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
            {day.dia > currentDay ? <Lock /> : <span>{day.dia}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
