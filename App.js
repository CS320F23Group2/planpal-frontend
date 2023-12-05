import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './login'; 
import Dashboard from './dashboard'; 
import Calendar from './calendar'; 
import NewEvent from './newEvent'; 
import Settings from './settings'; 
import InsertCalendar from './insertCalendar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <span className="logo">PlanPal</span>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/new-event" element={<NewEvent />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/insert-calendar" element={<InsertCalendar />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
