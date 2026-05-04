import dayjs from "dayjs";

import {useEffect, useState} from "react";

const MyTime = () => {

    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-43 h-43 rounded-2xl bg-yellow-300/30 backdrop-blur-sm p-2 shadow-xl flex items-center justify-center flex-col gap-1.5">
            <p className="life-savers-regular text-gray-50 text-lg">Lawrenceville, GA</p>
            <time className="text-6xl life-savers-extrabold text-white">{time.format("h:mm")}</time>
            <time className="text-white mt-0">{time.format("A")}</time>
        </div>
    )
}
export default MyTime
