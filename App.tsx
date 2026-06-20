import React from 'react';
import DayMap from './DayMap';
import DayScreen from './DayScreen';
import Reward from './Reward';
import Settings from './Settings';
import Welcome from './Welcome';
import QuizModule from './QuizModule';
import PrayerModule from './PrayerModule';
import MissionModule from './MissionModule';
import VerseModule from './VerseModule';

const App = () => {
  return (
    <div>
      {/* Aqui vai a lógica de roteamento do seu app */}
      <Welcome />
    </div>
  );
};

export default App;
