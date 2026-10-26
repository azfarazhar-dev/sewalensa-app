import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Camera,
  Calendar,
  User,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  RefreshCw,
  MapPin,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Head } from "@inertiajs/react";

import CalendarLayout from "@/layouts/calendar-layout";

const BRAND = "#c90001";

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
  const [mobileMenu, setMobileMenu] = useState(false);
  const today = useMemo(() => new Date(), []);
  const year = today.getFullYear();
  const currentMonthIndex = today.getMonth();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi SewaLensaMY! I checked your availability calendar and would like to reserve the Canon EOS R50."
    );
    window.open(`https://wa.me/60195371747?text=${text}`, "_blank");
  };

  // Fetch ALL bookings for the current year
  const fetchAllBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/bookings", {
        params: {
          start_date: `${year}-01-01`,
          end_date: `${year}-12-31`,
          all: true,
        },
      });

      const fetchedData = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      setBookings(fetchedData);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError("Failed to load booking schedule.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, [year]);

  const formatDateKey = (y: number, mIdx: number, d: number): string => {
    const m = String(mIdx + 1).padStart(2, "0");
    const day = String(d).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  // Map bookings indexed by YYYY-MM-DD
  const bookingMap = useMemo(() => {
    const map = new Map<string, ProcessedBooking>();

    bookings.forEach((booking: Booking) => {
      if (!booking.start_date || !booking.end_date) return;

      const [sYear, sMonth, sDay] = booking.start_date.split("-").map(Number);
      const [eYear, eMonth, eDay] = booking.end_date.split("-").map(Number);

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
        return "bg-neutral-800 text-white font-medium";
      case "booked":
      default:
        return "bg-[#c90001] text-white font-medium";
    }
  };

  return (
    <>
        {/* =========================================================
            HEADER TITLE SECTION
        ========================================================== */}
        <section className="pt-36 pb-8 px-5 text-center">
          <div className="mx-auto max-w-3xl">
            {/* <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 px-3.5 py-1 rounded-full text-xs font-medium text-neutral-600 shadow-2xs mb-4">
              <Sparkles size={13} style={{ color: BRAND }} />
              Live Availability Schedule
            </div> */}

            <h1 className="text-2xl font-semibold tracking-[-0.025em] text-[#141414] sm:text-4xl lg:text-[42px] leading-[1.2]">
              Availability Calendar{" "}
              <span className="inline-block text-[#c90001] font-semibold tracking-tight">
                {year}
              </span>
            </h1>

            <p className="mt-3 max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-neutral-500 font-normal">
              Check real-time camera availability from {MONTH_NAMES[currentMonthIndex]} to December {year}.
            </p>

            {/* Legend & Refresh Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
              <div className="flex items-center gap-4 bg-white border border-neutral-200/80 px-4 py-2 rounded-xl shadow-2xs font-medium text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c90001]" />
                  <span>Booked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <span>Blocked</span>
                </div>
              </div>

              <button
                onClick={fetchAllBookings}
                disabled={loading}
                className="flex items-center gap-1.5 bg-white border border-neutral-200/80 hover:border-neutral-300 px-3.5 py-2 rounded-xl shadow-2xs text-neutral-700 font-medium transition-colors"
              >
                <RefreshCw
                  size={12}
                  className={`text-neutral-500 ${loading ? "animate-spin" : ""}`}
                />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            CALENDAR GRID CONTAINER
        ========================================================== */}
        <section className="pb-20 px-5">
          <div className="mx-auto max-w-6xl">
            {/* Error Banner */}
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-xs text-red-700">
                <span>{error}</span>
                <button
                  onClick={fetchAllBookings}
                  className="font-semibold underline hover:text-red-900"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Main Months Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                {monthsData.map(
                  ({ name, monthIndex, firstDayOfWeek, daysInMonth }) => (
                    <div key={name} className="flex flex-col">
                      <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 border-b border-neutral-100 pb-1.5">
                        {name}
                      </h2>

                      {/* Weekday Labels */}
                      <div className="grid grid-cols-7 mb-1.5 text-center">
                        {WEEKDAYS.map((day, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold text-neutral-400"
                          >
                            {day}
                          </span>
                        ))}
                      </div>

                      {/* Days Grid */}
                      <div className="grid grid-cols-7 text-center gap-1">
                        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                          <div key={`empty-${i}`} className="h-7" />
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, i) => {
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
                              className={`group relative h-7 flex items-center justify-center text-[10px] rounded-md transition-colors cursor-pointer shadow-2xs ${styleClass}`}
                            >
                              {dayNumber}

                              {/* Hover Details Card */}
                              {booking && (
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col w-48 p-2.5 bg-neutral-900 text-white rounded-xl text-xs shadow-xl z-50 pointer-events-none text-left">
                                  <div className="flex items-center gap-1.5 font-medium text-neutral-300 border-b border-neutral-800 pb-1 mb-1">
                                    <User className="w-3 h-3 shrink-0 text-neutral-400" />
                                    <span className="truncate text-[11px]">
                                      {booking.client?.name || "Reserved"}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-1.5 text-neutral-300 mb-0.5">
                                    <Camera className="w-3 h-3 shrink-0 text-neutral-400" />
                                    <span className="truncate text-[10px]">
                                      {booking.item?.name || "Canon EOS R50"}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-1.5 text-neutral-400">
                                    <Calendar className="w-3 h-3 shrink-0" />
                                    <span className="truncate text-[10px]">
                                      {booking.start_date} → {booking.end_date}
                                    </span>
                                  </div>

                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

// Attach the persistent layout so Header and Footer render automatically
YearlyAvailabilityCalendar.layout = (page: React.ReactNode) => (
    <CalendarLayout>{page}</CalendarLayout>
);