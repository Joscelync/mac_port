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
        <div className="w-40 h-40 rounded-2xl bg-yellow-400/30 backdrop-blur-sm p-2 shadow-xl">
            <time>{time.format("h:mm")}</time>
        </div>
    )
}
export default MyTime
