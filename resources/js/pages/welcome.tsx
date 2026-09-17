import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface Client {
    id: number;
    name?: string;
}

interface Item {
    id: number;
    name?: string;
}

interface Booking {
    id: number;
    start_date: string;
    end_date: string;
    item?: Item;
    client?: Client;
    [key: string]: any; // Allows optional extra fields from Eloquent
}

interface ProcessedBooking extends Booking {
    isStart: boolean;
    isEnd: boolean;
    isSingleDay: boolean;
}

const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export default function YearlyAvailabilityCalendar() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBookings() {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`/api/bookings?year=${year}`);
                setBookings(response.data);
            } catch (err) {
                console.error("API Fetch Error:", err);
                setError("Failed to load bookings");
            } finally {
                setLoading(false);
            }
        }

        fetchBookings();
    }, [year]);

    const formatDateKey = (y: number, mIdx: number, d: number): string => {
        const m = String(mIdx + 1).padStart(2, "0");
        const day = String(d).padStart(2, "0");
        return `${y}-${m}-${day}`;
    };

    const bookingMap = useMemo(() => {
        const map = new Map<string, ProcessedBooking>();

        bookings.forEach((booking: Booking) => {
            if (!booking.start_date || !booking.end_date) return;

            const [sYear, sMonth, sDay] = booking.start_date
                .split("-")
                .map(Number);
            const [eYear, eMonth, eDay] = booking.end_date
                .split("-")
                .map(Number);

            let current = new Date(sYear, sMonth - 1, sDay);
            const end = new Date(eYear, eMonth - 1, eDay);

            while (current <= end) {
                const dateKey = formatDateKey(
                    current.getFullYear(),
                    current.getMonth(),
                    current.getDate()
                );

                const isStart = dateKey === booking.start_date;
                const isEnd = dateKey === booking.end_date;

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

    const monthsData = useMemo(() => {
        return MONTH_NAMES.map((name, monthIndex) => {
            const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
            const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
            return { name, monthIndex, firstDayOfWeek, daysInMonth };
        });
    }, [year]);

    return (
        <div className="w-full min-h-screen mx-auto p-6 bg-white text-slate-800 antialiased">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                        SewaLensaMY
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Availability Overview {year}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {loading && (
                        <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                    )}
                    {error && (
                        <span className="text-xs text-red-500">{error}</span>
                    )}
                    <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                        {/* <button
              onClick={() => setYear((y) => y - 1)}
              className="p-1.5 hover:bg-white rounded-md transition text-slate-600 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button> */}
                        <span className="px-3 text-sm font-semibold text-slate-800">
                            {year}
                        </span>
                        {/* <button
              onClick={() => setYear((y) => y + 1)}
              className="p-1.5 hover:bg-white rounded-md transition text-slate-600 shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button> */}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                {monthsData.map(
                    ({ name, monthIndex, firstDayOfWeek, daysInMonth }) => (
                        <div key={name} className="flex flex-col">
                            <h2 className="text-xs font-bold uppercase text-slate-900 mb-3">
                                {name}
                            </h2>
                            <div className="grid grid-cols-7 mb-1 text-center">
                                {WEEKDAYS.map((day, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[10px] font-semibold text-slate-400"
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 text-center">
                                {Array.from({ length: firstDayOfWeek }).map(
                                    (_, i) => (
                                        <div
                                            key={`empty-${i}`}
                                            className="h-8"
                                        />
                                    )
                                )}

                                {Array.from({ length: daysInMonth }).map(
                                    (_, i) => {
                                        const dayNumber = i + 1;
                                        const dateKey = formatDateKey(
                                            year,
                                            monthIndex,
                                            dayNumber
                                        );
                                        const booking = bookingMap.get(dateKey);

                                        if (!booking) {
                                            return (
                                                <div
                                                    key={dateKey}
                                                    className="h-8 flex items-center justify-center text-[11px] text-slate-600 hover:bg-slate-100 rounded"
                                                >
                                                    {dayNumber}
                                                </div>
                                            );
                                        }

                                        const {
                                            isStart,
                                            isEnd,
                                            isSingleDay,
                                            item,
                                            client,
                                        } = booking;
                                        let rounded = "";
                                        if (isSingleDay) rounded = "rounded-md";
                                        else if (isStart)
                                            rounded = "rounded-l-md";
                                        else if (isEnd)
                                            rounded = "rounded-r-md";

                                        return (
                                            <div
                                                key={dateKey}
                                                title={`${
                                                    item?.name || "Booking"
                                                } - ${
                                                    client?.name || "Client"
                                                }`}
                                                className={`h-8 flex items-center justify-center text-[11px] font-semibold text-white bg-red-600 ${rounded}`}
                                            >
                                                {dayNumber}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
