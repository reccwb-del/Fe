import React from "react";
import { Volume2, VolumeX, RefreshCw, X } from "lucide-react";

export default function Settings({ currentDay, totalStars, soundOn, onToggleSound, onAdvanceDay, onResetAventura, onClose }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-6 rounded-3xl w-full max-w-sm">
        <button onClick={onClose} className="mb-4"><X /></button>
        <button onClick={() => onToggleSound(!soundOn)} className="w-full p-4 border mb-4 flex items-center gap-2">
          {soundOn ? <Volume2 /> : <VolumeX />} Sonido
        </button>
        <button onClick={onAdvanceDay} className="w-full p-4 bg-sky-500 text-white rounded-xl mb-4">Avanzar Día</button>
        <button onClick={onResetAventura} className="w-full p-4 bg-red-500 text-white rounded-xl">Reiniciar Aventura</button>
      </div>
    </div>
  );
}
