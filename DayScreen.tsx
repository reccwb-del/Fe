import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence } from "motion/react";
import VerseModule from "./VerseModule";
import PrayerModule from "./PrayerModule";
import QuizModule from "./QuizModule";
import MissionModule from "./MissionModule";

export default function DayScreen({ dayData, onCompleteDay, onGoBack }: any) {
  const [phase, setPhase] = useState("verse");
  return (
    <div className="min-h-screen bg-pastel-sky p-4">
      <button onClick={onGoBack} className="mb-4"><ArrowLeft /></button>
      <AnimatePresence mode="wait">
        {phase === "verse" && <VerseModule dayNum={dayData.dia} tema={dayData.tema} versiculo={dayData.versiculo} onNext={() => setPhase("prayer")} />}
        {phase === "prayer" && <PrayerModule oracion={dayData.oracion} onNext={() => setPhase("quiz")} />}
        {phase === "quiz" && <QuizModule quizQuestions={dayData.quiz} onNext={() => setPhase("mission")} />}
        {phase === "mission" && <MissionModule dayNum={dayData.dia} misionText={dayData.mision} onCompleteDay={onCompleteDay} />}
      </AnimatePresence>
    </div>
  );
}
