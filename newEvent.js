import React, { useState } from 'react';

function NewEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleAddEvent = () => {
    //add code to handle the addition of a new event.
    //save the event to a list, database, or db?
    //validation and error handling here
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#0000',
    padding: '20px',
    borderRadius: '10px',
  };
  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    background: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Add New Event</h1>
      <form>
        <div>
          <label htmlFor="eventName" style={labelStyle}>
            Event Name:
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="eventDate" style={labelStyle}>
            Event Date:
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="eventTime" style={labelStyle}>
            Event Time:
          </label>
          <input
            type="time"
            id="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <button type="button" onClick={handleAddEvent} style={buttonStyle}>
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewEvent;
