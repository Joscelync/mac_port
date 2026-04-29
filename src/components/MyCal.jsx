import React from 'react';

const MyCal = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = now.getDate();

    const monthName = now.toLocaleDateString("en-US", {
        month: "long",
    });

    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

    const dates = [];

    // Empty spaces before the 1st
    for (let i = 0; i < firstDay; i++) {
        dates.push(null);
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
    }

    return (
        <div className="w-40 h-40 rounded-2xl bg-blue-400/30 backdrop-blur-sm p-2 shadow-xl">
            {/* Month */}
            <h2 className="font-bold text-gray-500 ml-1.5">
                {monthName}
            </h2>

            {/* Days of week */}
            <div className="grid grid-cols-7 text-xs text-center font-bold text-gray-400">
                {daysOfWeek.map((day) => (
                    <p key={day}>{day}</p>
                ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-white/50">
                {dates.map((d, i) => (
                    <div key={i}>
                        {d && (
                            <span
                                className={`inline-block w-5 h-5 leading-5 rounded-full ${
                                    d === today
                                        ? "bg-blue-500 text-white font-semibold"
                                        : ""
                                }`}
                            >
                {d}
              </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MyCal