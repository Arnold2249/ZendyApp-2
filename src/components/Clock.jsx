import React from 'react';
import { FaClock, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Clock = ({
  currentTime,
  monthNames,
  calendarDate,
  prevMonth,
  nextMonth,
  renderCalendar,
  }) => {
  // Helper to format time in 12hr format with AM/PM
  const formatTime12hr = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div>
    {/* Digital Clock */}
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md px-8 py-3 flex items-center font-mono text-2xl font-bold text-white tracking-widest border border-indigo-200 mb-6">
      <FaClock className="mr-3 text-white opacity-80" />
      {formatTime12hr(currentTime)}
    </div>
    {/* Calendar */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
      <FaCalendarAlt className="text-indigo-600 mr-2" />
      Calendar
      </h3>
      <div className="flex justify-between items-center mb-2">
      <button
        id="prev-month"
        className="px-2 py-1 rounded hover:bg-indigo-100 text-indigo-600"
        onClick={prevMonth}
      >
        <FaChevronLeft />
      </button>
      <span id="calendar-month-title" className="font-semibold text-indigo-700">
        {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
      </span>
      <button
        id="next-month"
        className="px-2 py-1 rounded hover:bg-indigo-100 text-indigo-600"
        onClick={nextMonth}
      >
        <FaChevronRight />
      </button>
      </div>
      <div id="calendar-container" className="grid grid-cols-7 text-xs text-gray-500 mb-1">
      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
        <div key={day}>{day}</div>
      ))}
      {renderCalendar()}
      </div>
    </div>
    </div>
  );
  };

export default Clock;