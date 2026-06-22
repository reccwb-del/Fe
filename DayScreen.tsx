import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import VerseModule from "./VerseModule";
import PrayerModule from "./PrayerModule";
import QuizModule from "./QuizModule";
import MissionModule from "./MissionModule";

interface DayScreenProps {
  dayData: any;
  onCompleteDay: () => void;
  onGoBack: () => void;
}

type Phase = "verse" | "prayer" | "quiz" | "mission";

export default function DayScreen({ dayData, onCompleteDay, onGoBack }: DayScreenProps) {
  const [phase, setPhase] = useState<Phase>("verse");

  const handleGoBack = () => {
    onGoBack();
  };

  const steps = [
    { key: "verse", label: "Versículo", icon: "📖", color: "bg-[#FFE5A0]" },
    { key: "prayer", label: "Oración", icon: "🙏", color: "bg-[#D9C7F5]" },
    { key: "quiz", label: "Trivia", icon: "❓", color: "bg-[#A7D8F5]" },
    { key: "mission", label: "Misión", icon: "🎯", color: "bg-[#B8E6C1]" },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === phase);

  return (
    <div className="relative min-h-screen bg-pastel-sky flex flex-col font-body select-none pb-8">
      
      {/* 1. TOP HEADER WITH BREADCRUMBS */}
      <div className="bg-white border-b-4 border-slate-100 py-3 px-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-md mx-auto flex flex-col space-y-3">
          
          <div className="flex items-center justify-between">
            <button
              id="dayscreen_back_btn"
              onClick={handleGoBack}
              className="h-9 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl flex items-center gap-1 text-xs border border-slate-200 active:scale-95 transition-transform"
            >
              <ArrowLeft size={14} />
              Salir
            </button>

            <h2 className="font-title text-xl text-amber-900">
              🦁 Día {dayData.dia} • {dayData.tema}
            </h2>

            <div className="w-12 h-9" />
          </div>

          <div className="grid grid-cols-4 gap-1.5 pt-1">
            {steps.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isPassed = idx < currentStepIndex;

              return (
                <div key={step.key} className="flex flex-col items-center space-y-1">
                  <div
                    className={`w-full h-2 rounded-full transition-all
