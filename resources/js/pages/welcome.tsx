import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Example booking data (ISO date strings YYYY-MM-DD)
const INITIAL_BOOKINGS = [
  { id: 1, title: 'Sony A7IV Lens Kit', startDate: '2026-01-12', endDate: '2026-01-16' },
  { id: 2, title: 'DJI Ronin RS3', startDate: '2026-02-20', endDate: '2026-02-25' },
  { id: 3, title: 'Canon R5 + 24-70mm', startDate: '2026-03-05', endDate: '2026-03-12' },
  { id: 4, title: 'Aputure 300d II', startDate: '2026-03-28', endDate: '2026-04-02' },
  { id: 5, title: 'RED Komodo 6K', startDate: '2026-05-10', endDate: '2026-05-18' },
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function YearlyAvailabilityCalendar({ bookings = INITIAL_BOOKINGS }) {
  const [year, setYear] = useState(new Date().getFullYear());

  // Helper: Format date to YYYY-MM-DD string using local time
  const formatDateKey = (year, monthIndex, day) => {
    const m = String(monthIndex + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  // Pre-calculate booked dates map for fast lookups
  const bookingMap = useMemo(() => {
    const map = new Map();

    bookings.forEach((booking) => {
      let current = new Date(`${booking.startDate}T00:00:00`);
      const end = new Date(`${booking.endDate}T00:00:00`);

      while (current <= end) {
        const dateKey = current.toISOString().split('T')[0];
        const isStart = dateKey === booking.startDate;
        const isEnd = dateKey === booking.endDate;

        map.set(dateKey, {
          ...booking,
          isStart,
          isEnd,
          isSingleDay: isStart && isEnd,
        });

        current.setDate(current.getDate() + 1);
      }
    });

    return map;
  }, [bookings]);

  // Build grid metadata for all 12 months
  const monthsData = useMemo(() => {
    return MONTH_NAMES.map((name, monthIndex) => {
      const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
      return { name, monthIndex, firstDayOfWeek, daysInMonth };
    });
  }, [year]);

  return (
    <div className="w-full mx-auto p-6 bg-white text-slate-800 antialiased">
      {/* Header Controls */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            SewaLensaMY
          </h1>
          <p className="text-s text-slate-500 mt-1">
            Availability Overview {year}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setYear((y) => y - 1)}
              className="p-1.5 hover:bg-white rounded-md transition text-slate-600 hover:text-slate-900 shadow-xs"
              aria-label="Previous year"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 text-sm font-semibold text-slate-800">{year}</span>
            <button
              onClick={() => setYear((y) => y + 1)}
              className="p-1.5 hover:bg-white rounded-md transition text-slate-600 hover:text-slate-900 shadow-xs"
              aria-label="Next year"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legend Indicator */}
      <div className="flex items-center gap-6 mb-8 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-2.5 rounded-sm bg-red-500" />
          <span>Booked Range</span>
        </div>
      </div>

      {/* 12 Months Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
        {monthsData.map(({ name, monthIndex, firstDayOfWeek, daysInMonth }) => (
          <div key={name} className="flex flex-col">
            {/* Month Name */}
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-3">
              {name}
            </h2>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 mb-1 text-center">
              {WEEKDAYS.map((day, idx) => (
                <span key={idx} className="text-[10px] font-semibold text-slate-400">
                  {day}
                </span>
              ))}
            </div>

            {/* Month Calendar Grid */}
            <div className="grid grid-cols-7 text-center">
              {/* Offset padding for starting weekday */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8" />
              ))}

              {/* Days of the Month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNumber = i + 1;
                const dateKey = formatDateKey(year, monthIndex, dayNumber);
                const booking = bookingMap.get(dateKey);

                if (!booking) {
                  return (
                    <div
                      key={dateKey}
                      className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-600 hover:bg-slate-100 rounded transition cursor-default"
                    >
                      {dayNumber}
                    </div>
                  );
                }

                // Determine CSS styles for continuous range visual logic
                const { isStart, isEnd, isSingleDay, title } = booking;

                return (
                  <div
                    key={dateKey}
                    title={`${title} (${booking.startDate} to ${booking.endDate})`}
                    className={`h-8 flex items-center justify-center text-[11px] font-semibold text-white bg-red-600 relative transition cursor-pointer hover:bg-red-700`}
                  >
                    {dayNumber}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}