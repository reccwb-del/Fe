import React, { useState } from "react";
import { Volume2, VolumeX, RefreshCw, ChevronRight, X, Heart, ShieldAlert } from "lucide-react";
import { playClickSound, isSoundEnabled, setSoundEnabled } from "../utils/audio";

interface SettingsProps {
  currentDay: number;
  totalStars: number;
  soundOn: boolean;
  onToggleSound: (val: boolean) => void;
  onAdvanceDay: () => void;
  onResetAventura: () => void;
  onClose: () => void;
}

export default function Settings({
  currentDay,
  totalStars,
  soundOn,
  onToggleSound,
  onAdvanceDay,
  onResetAventura,
  onClose,
}: SettingsProps) {
  const [showAdvanceConfirm, setShowAdvanceConfirm] = useState(false);
  const [resetStep, setResetStep] = useState(0); // 0 = default, 1 = first warning, 2 = final warning

  const handleToggleSound = () => {
    const newVal = !soundOn;
    onToggleSound(newVal);
    // Let audio.ts know so it responds
    setSoundEnabled(newVal);
    if (newVal) {
      setTimeout(() => playClickSound(), 100);
    }
  };

  const clickSFX = () => {
    playClickSound();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-md font-body">
      <div 
        id="settings_modal"
        className="w-full max-w-md bg-white border-8 border-[#FFE5A0] rounded-[32px] shadow-2xl overflow-hidden transform scale-100 transition-all"
      >
        {/* Header */}
        <div className="bg-[#FFE5A0] p-4 flex justify-between items-center relative">
          <h2 className="font-title text-2xl text-amber-900 flex items-center gap-2">
            ⚙️ Ajustes del Viaje
          </h2>
          <button
            id="close_settings"
            onClick={() => { clickSFX(); onClose(); }}
            className="w-10 h-10 rounded-full bg-white border-2 border-amber-900 flex items-center justify-center text-amber-900 hover:bg-[#FFC9DE] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Sounds */}
          <div className="bg-[#A7D8F5]/30 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-sky-900">Efectos de Sonido</h3>
              <p className="text-xs text-sky-700 font-medium">Melodías y ruidos del León</p>
            </div>
            <button
              id="sound_toggle_btn"
              onClick={handleToggleSound}
              className={`w-14 h-14 rounded-full border-4 flex items-center justify-center text-white font-bold transition-all button-bounce-hover ${
                soundOn
                  ? "bg-emerald-400 border-white shadow-md"
                  : "bg-rose-400 border-white shadow-md"
              }`}
            >
              {soundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
          </div>

          {/* Stats quick card */}
          <div className="bg-[#FFC9DE]/30 p-4 rounded-2xl flex justify-around text-center">
            <div>
              <div className="text-2xl">⭐</div>
              <div className="font-title text-lg text-rose-700">{totalStars} / 30</div>
              <div className="text-xs text-rose-600 font-medium">Estrellas</div>
            </div>
            <div className="border-r border-rose-200" />
            <div>
              <div className="text-2xl">🦁</div>
              <div className="font-title text-lg text-rose-700">Día {currentDay}</div>
              <div className="text-xs text-rose-600 font-medium font-body">Estadía actual</div>
            </div>
          </div>

          {/* Skip Day (Avanzar día) */}
          <div className="border-t border-slate-100 pt-4 space-y-2">
            {!showAdvanceConfirm ? (
              <button
                id="advance_day_settings"
                onClick={() => { clickSFX(); setShowAdvanceConfirm(true); }}
                className="w-full h-12 rounded-2xl border-2 border-sky-400 bg-sky-50 text-sky-800 font-bold hover:bg-[#A7D8F5]/20 flex items-center justify-center gap-2 transition-all"
              >
                <ChevronRight size={18} />
                Avanzar al siguiente día
              </button>
            ) : (
              <div className="bg-sky-50 p-4 border border-sky-200 rounded-2xl space-y-3">
                <p className="text-xs text-sky-900 font-medium text-center">
                  ¿Quieres saltar al siguiente día sin terminar el actual? ¡Conseguiras una estrella después!
                </p>
                <div className="flex gap-2">
                  <button
                    id="confirm_advance_no"
                    onClick={() => { clickSFX(); setShowAdvanceConfirm(false); }}
                    className="flex-1 py-2 bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs"
                  >
                    No, seguir aquí
                  </button>
                  <button
                    id="confirm_advance_yes"
                    onClick={() => {
                      clickSFX();
                      onAdvanceDay();
                      setShowAdvanceConfirm(false);
                    }}
                    className="flex-1 py-2 bg-sky-500 text-white font-bold rounded-xl text-xs hover:bg-sky-600"
                  >
                    ¡Sí, avanzar!
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Reset Adventure (Reiniciar aventura) with double confirmation */}
          <div className="border-t border-slate-100 pt-4">
            {resetStep === 0 ? (
              <button
                id="reset_adventure_btn"
                onClick={() => { clickSFX(); setResetStep(1); }}
                className="w-full h-12 rounded-2xl border-2 border-rose-300 bg-rose-50 text-rose-800 font-bold hover:bg-rose-100 flex items-center justify-center gap-2 transition-all text-sm"
              >
                <RefreshCw size={16} />
                Reiniciar aventura
              </button>
            ) : resetStep === 1 ? (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-3">
                <p className="text-xs text-amber-900 font-medium text-center">
                  ⚠️ <strong>¿Estás seguro?</strong> Perderás todas tus {totalStars} estrellas ganadas hasta ahora y volverás al Día 1.
                </p>
                <div className="flex gap-2">
                  <button
                    id="cancel_reset_1"
                    onClick={() => { clickSFX(); setResetStep(0); }}
                    className="flex-1 py-2 bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs"
                  >
                    Cancelar
                  </button>
                  <button
                    id="confirm_reset_1"
                    onClick={() => { clickSFX(); setResetStep(2); }}
                    className="flex-1 py-2 bg-amber-500 text-white font-bold rounded-xl text-xs"
                  >
                    Sí, entiendo
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-rose-100 border border-rose-300 p-4 rounded-2xl space-y-3">
                <div className="flex justify-center text-rose-600">
                  <ShieldAlert size={24} className="animate-bounce" />
                </div>
                <p className="text-xs text-rose-950 font-bold text-center">
                  ❗ <strong>CONFIRMACIÓN FINAL</strong> ❗
                  Esto eliminará permanentemente todo tu progreso. No se puede deshacer. ¿Seguro de borrar todo?
                </p>
                <div className="flex gap-2">
                  <button
                    id="cancel_reset_2"
                    onClick={() => { clickSFX(); setResetStep(0); }}
                    className="flex-1 py-2 bg-[#B8E6C1] text-emerald-900 font-bold rounded-xl text-xs"
                  >
                    ¡No, salvar progreso!
                  </button>
                  <button
                    id="confirm_reset_destructive"
                    onClick={() => {
                      clickSFX();
                      onResetAventura();
                      setResetStep(0);
                      onClose();
                    }}
                    className="flex-1 py-2 bg-rose-600 text-white font-black rounded-xl text-xs hover:bg-rose-700"
                  >
                    SÍ, ¡BORRAR TODO!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info decoration */}
        <div className="bg-slate-50 p-2.5 text-center text-[10px] text-slate-400 font-medium">
          Aventureros de la Fe • Hecho con <Heart size={10} className="inline fill-rose-400 stroke-none" /> para niños
        </div>
      </div>
    </div>
  );
}
