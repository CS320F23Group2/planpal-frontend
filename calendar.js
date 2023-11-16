import React, { useState } from 'react';
import CalendarView from './calendarView';
import './index.css'; // Import your existing CSS

function Calendar() {
  const [view, setView] = useState('week'); // Default to 'week' view

  return (
    <div className="calendar-container">
      <h1>PlanPal</h1>
      {/* <div className="calendar-buttons">
        <button onClick={() => setView('day')}>Day View</button>
        <button onClick={() => setView('week')}>Week View</button>
        <button onClick={() => setView('month')}>Month View</button>
      </div> */}
      <CalendarView view={view} />
    </div>
  );
}

export default Calendar;
