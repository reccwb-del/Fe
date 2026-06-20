import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import DayMap from "./components/DayMap";
import DayScreen from "./components/DayScreen";
import Reward from "./components/Reward";
import Settings from "./components/Settings";
import { days } from "./data/days";
import { isSoundEnabled, setSoundEnabled, playClickSound } from "./utils/audio";

export default function App() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  
  // Navigation states: "welcome" | "map" | "day" | "reward"
  const [activeScreen, setActiveScreen] = useState<"welcome" | "map" | "day" | "reward">("welcome");
  const [selectedDayNum, setSelectedDayNum] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDay = localStorage.getItem("currentDay");
      if (savedDay) {
        setCurrentDay(Math.min(30, Math.max(1, parseInt(savedDay))));
      }

      const savedCompleted = localStorage.getItem("completedDays");
      if (savedCompleted) {
        try {
          setCompletedDays(JSON.parse(savedCompleted));
        } catch (e) {
          setCompletedDays([]);
        }
      }

      const savedSound = localStorage.getItem("soundEnabled");
      if (savedSound !== null) {
        setSoundOn(savedSound === "true");
        setSoundEnabled(savedSound === "true");
      } else {
        setSoundOn(true);
        setSoundEnabled(true);
      }
    }
  }, []);

  // Update sound auxiliary helper if soundOn changes (e.g. from state)
  const handleToggleSound = (enabled: boolean) => {
    setSoundOn(enabled);
    setSoundEnabled(enabled);
  };

  // Skip / Unblock Day manual
  const handleAdvanceDay = () => {
    const nextDay = Math.min(30, currentDay + 1);
    setCurrentDay(nextDay);
    localStorage.setItem("currentDay", nextDay.toString());
    
    // Automatically add to completedDays if they wanted to bypass
    const updatedCompleted = Array.from(new Set([...completedDays, currentDay]));
    setCompletedDays(updatedCompleted);
    localStorage.setItem("completedDays", JSON.stringify(updatedCompleted));

    setSelectedDayNum(currentDay);
    setActiveScreen("reward");
  };

  // Reset entire score
  const handleResetAventura = () => {
    setCurrentDay(1);
    setCompletedDays([]);
    setSelectedDayNum(null);
    setActiveScreen("welcome");
    
    localStorage.setItem("currentDay", "1");
    localStorage.setItem("completedDays", JSON.stringify([]));
  };

  // Complete current module steps
  const handleCompleteActiveDay = () => {
    if (selectedDayNum === null) return;

    const updatedCompleted = Array.from(new Set([...completedDays, selectedDayNum]));
    setCompletedDays(updatedCompleted);
    localStorage.setItem("completedDays", JSON.stringify(updatedCompleted));

    // If they completed the highest active day, advance the storyline
    if (selectedDayNum === currentDay) {
      const nextDay = Math.min(30, currentDay + 1);
      setCurrentDay(nextDay);
      localStorage.setItem("currentDay", nextDay.toString());
    }

    // Direct to the Star Reward celebration ceremony!
    setActiveScreen("reward");
  };

  // Fetch data of selected day or fallback to currentDay
  const targetDayNum = selectedDayNum !== null ? selectedDayNum : currentDay;
  // Match index (1-based index)
  const activeDayData = days.find((d) => d.dia === targetDayNum) || days[0];

  return (
    <div className="min-h-screen text-slate-800 font-body relative overflow-x-hidden">
      
      {/* Dynamic Screen Routing */}
      {activeScreen === "welcome" && (
        <Welcome
          currentDay={currentDay}
          starsCount={completedDays.length}
          activeDayData={days.find((d) => d.dia === currentDay) || days[0]}
          onComenzar={() => {
            setSelectedDayNum(currentDay);
            setActiveScreen("day");
          }}
          onViewMap={() => setActiveScreen("map")}
          onOpenSettings={() => setShowSettings(true)}
        />
      )}

      {activeScreen === "map" && (
        <DayMap
          daysData={days}
          currentDay={currentDay}
          completedDays={completedDays}
          onSelectDay={(dayNum) => {
            setSelectedDayNum(dayNum);
            setActiveScreen("day");
          }}
          onGoBack={() => setActiveScreen("welcome")}
        />
      )}

      {activeScreen === "day" && activeDayData && (
        <DayScreen
          dayData={activeDayData}
          onCompleteDay={handleCompleteActiveDay}
          onGoBack={() => {
            setActiveScreen("welcome");
          }}
        />
      )}

      {activeScreen === "reward" && (
        <Reward
          dayNum={targetDayNum}
          temaName={activeDayData?.tema || ""}
          onGoHome={() => {
            setActiveScreen("welcome");
            setSelectedDayNum(null);
          }}
        />
      )}

      {/* Floating Global Settings overlay */}
      {showSettings && (
        <Settings
          currentDay={currentDay}
          totalStars={completedDays.length}
          soundOn={soundOn}
          onToggleSound={handleToggleSound}
          onAdvanceDay={handleAdvanceDay}
          onResetAventura={handleResetAventura}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
