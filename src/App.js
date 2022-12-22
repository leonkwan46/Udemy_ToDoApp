/* eslint-disable react/jsx-pascal-case */

import './App.css';
import React, { useState } from 'react';
import Goals from './components/goals/goals';
import New_Goals from './components/new_goals/new_goals';

function App() {
  const [goalList, setGoalList] = useState([
  ]);

  const goalHandler = newGoal => {
    setGoalList(prev => prev.concat(newGoal));
  }

  return (
    <div>
      <New_Goals onAdd={goalHandler} />
      <Goals goals={goalList} />
    </div>

  );
}

export default App;
