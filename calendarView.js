import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

function CalendarView({ view }) {
  //sample events
  const events = [
    {
        title: 'Class',
        start: new Date(2023, 9, 15, 10, 0),
        end: new Date(2023, 9, 30, 12, 0),
      },
    {
      title: 'Meeting 1',
      start: new Date(2023, 9, 30, 10, 0),
      end: new Date(2023, 9, 30, 12, 0),
    },
    {
      title: 'CS 320 Class',
      start: new Date(2023, 10, 1, 14, 0),
      end: new Date(2023, 10, 1, 16, 0),
    },
    
  ];

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['day', 'week', 'month']}
        defaultView={view} //default view
        style={{ height: 500 }} 
      />
    </div>
  );
}

export default CalendarView;
