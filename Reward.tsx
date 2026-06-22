import React, { useEffect } from "react";
import { Star } from "lucide-react";
import confetti from "canvas-confetti";
import Mascot from "./Mascot";

export default function Reward({ dayNum, temaName, onGoHome }: any) {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Star className="w-32 h-32 text-yellow-400" />
      <h1 className="text-4xl font-bold mt-4">¡Felicitaciones!</h1>
      <p className="mt-2">Terminaste el Día {dayNum}</p>
      <button onClick={onGoHome} className="mt-8 py-4 px-8 bg-green-500 text-white rounded-full">Volver al inicio</button>
    </div>
  );
} 
