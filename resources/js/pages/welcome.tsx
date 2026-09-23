import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Loader2, User, Camera, Calendar } from "lucide-react";

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
    status?: "booked" | "blocked" | "available";
    item?: Item;
    client?: Client;
    [key: string]: any;
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
    const today = useMemo(() => new Date(), []);
    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredBooking, setHoveredBooking] = useState<{
        booking: ProcessedBooking;
        dateKey: string;
    } | null>(null);

    useEffect(() => {
        async function fetchBookings() {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get("/api/bookings");
                setBookings(response.data);
            } catch (err) {
                console.error("API Fetch Error:", err);
                setError("Failed to load bookings");
            } finally {
                setLoading(false);
            }
        }

        fetchBookings();
    }, []);

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
        }).filter(({ monthIndex }) => monthIndex >= currentMonthIndex);
    }, [year, currentMonthIndex]);

    const getDayStyle = (booking?: ProcessedBooking) => {
        if (!booking) {
            return "bg-emerald-500 text-white hover:bg-emerald-600";
        }

        switch (booking.status?.toLowerCase()) {
            case "blocked":
                return "bg-slate-700 text-white";
            case "booked":
            default:
                return "bg-red-600 text-white font-semibold";
        }
    };

    return (
        <div className="w-full min-h-screen mx-auto p-6 bg-white text-slate-800 antialiased">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                        SewaLensaMY {year}
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Availability Overview ({MONTH_NAMES[currentMonthIndex]} – December {year})
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span>Available</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                            <span>Booked</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            <span>Blocked</span>
                        </div>
                    </div>

                    {loading && (
                        <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                    )}
                    {error && (
                        <span className="text-xs text-red-500">{error}</span>
                    )}
                </div>
            </div>

            {/* Calendar Grid */}
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

                            <div className="grid grid-cols-7 text-center gap-0.5">
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
                                        const styleClass = getDayStyle(booking);

                                        return (
                                            <div
                                                key={dateKey}
                                                onMouseEnter={() => {
                                                    if (booking) {
                                                        setHoveredBooking({
                                                            booking,
                                                            dateKey,
                                                        });
                                                    }
                                                }}
                                                onMouseLeave={() => setHoveredBooking(null)}
                                                className={`group relative h-8 flex items-center justify-center text-[11px] rounded transition-colors cursor-pointer ${styleClass}`}
                                            >
                                                {dayNumber}

                                                {/* Tooltip Card on Hover */}
                                                {booking && (
                                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col w-50 p-3 bg-slate-900 text-white rounded-lg text-xs shadow-xl z-50 pointer-events-none">
                                                        <div className="flex items-center gap-1.5 font-semibold text-slate-400 border-b border-slate-700 pb-1 mb-1.5">
                                                            <User className="w-3.5 h-3.5 shrink-0" />
                                                            <span className="truncate">
                                                                {booking.client?.name || "N/A Client"}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                                                            <Camera className="w-3 h-3 shrink-0 text-slate-400" />
                                                            <span className="truncate text-[11px]">
                                                                {booking.item?.name || "Equipment"}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                                                            <Calendar className="w-3 h-3 shrink-0" />
                                                            <span>
                                                                {booking.start_date} → {booking.end_date}
                                                            </span>
                                                        </div>

                                                        {/* Tooltip Arrow */}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                                                    </div>
                                                )}
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