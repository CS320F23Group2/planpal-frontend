import React, { useState } from 'react';
import './index.css'; // Import your updated CSS
import { Link } from 'react-router-dom';
import Confetti from 'react-dom-confetti';

function Dashboard() {
  const currentDate = new Date().toLocaleDateString();
  const [showConfetti, setShowConfetti] = useState(false);

  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    decay: 0.9,
  };

  const handleCheckboxClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); // 2 seconds
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">PlanPal</h1>
        <p className="dashboard-date">{currentDate}</p>
        <nav className="nav-bar">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/calendar" className="nav-link">
            Calendar
          </Link>
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
          <Link to="/new-event" className="dashboard-button">
            Add Event
          </Link>
        </nav>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3 className="section-title">Today's Tasks</h3>
          <ul className="task-list">
            <li>
              <input type="checkbox" id="task1" onClick={handleCheckboxClick} />
              <label htmlFor="task1">Task 1</label>
              <p className="task-clock">2h 30m left</p>
            </li>
            <li>
              <input type="checkbox" id="task2" onClick={handleCheckboxClick} />
              <label htmlFor="task2">Task 2</label>
              <p className="task-clock">1h 15m left</p>
            </li>
            <li>
              <input type="checkbox" id="task3" onClick={handleCheckboxClick} />
              <label htmlFor="task3">Task 3</label>
              <p className="task-clock">3h 45m left</p>
            </li>
          </ul>
        </div>
        <div className="dashboard-card">
          <h3 className="section-title">Tomorrow's Tasks</h3>
          <ul className="task-list">
            <li>
              <input type="checkbox" id="task4" onClick={handleCheckboxClick} />
              <label htmlFor="task4">Task 4</label>
              <p className="task-clock">20m left</p>
            </li>
            <li>
              <input type="checkbox" id="task5" onClick={handleCheckboxClick} />
              <label htmlFor="task5">Task 5</label>
              <p className="task-clock">1h 10m left</p>
            </li>
            <li>
              <input type="checkbox" id="task6" onClick={handleCheckboxClick} />
              <label htmlFor="task6">Task 6</label>
              <p className="task-clock">45m left</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h3 className="section-title">Upcoming Tasks</h3>
          <ul className="task-list">
            <li>
              <input type="checkbox" id="upcomingTask1" onClick={handleCheckboxClick} />
              <label htmlFor="upcomingTask1">Upcoming Task 1</label>
              <p className="task-clock">1d 4h 30m left</p>
            </li>
            <li>
              <input type="checkbox" id="upcomingTask2" onClick={handleCheckboxClick} />
              <label htmlFor="upcomingTask2">Upcoming Task 2</label>
              <p className="task-clock">2d 6h 15m left</p>
            </li>
            <li>
              <input type="checkbox" id="upcomingTask3" onClick={handleCheckboxClick} />
              <label htmlFor="upcomingTask3">Upcoming Task 3</label>
              <p className="task-clock">3d 3h 45m left</p>
            </li>
          </ul>
        </div>
        <div className="dashboard-card">
          <h3 className="section-title">This Week</h3>
          <ul className="task-list">
            <li>
              <input type="checkbox" id="taskA" onClick={handleCheckboxClick} />
              <label htmlFor="taskA">Task A</label>
              <p className="task-clock">4d 8h 20m left</p>
            </li>
            <li>
              <input type="checkbox" id="taskB" onClick={handleCheckboxClick} />
              <label htmlFor="taskB">Task B</label>
              <p className="task-clock">5d 5h 30m left</p>
            </li>
            <li>
              <input type="checkbox" id="taskC" onClick={handleCheckboxClick} />
              <label htmlFor="taskC">Task C</label>
              <p className="task-clock">6d 7h 10m left</p>
            </li>
          </ul>
        </div>
      </div>
      <Confetti active={showConfetti} config={config} />
    </div>
  );
}

export default Dashboard;
