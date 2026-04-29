import dayjs from "dayjs";

import {navIcons, navLinks} from "#constants/index.js";
import useWindowStore from "#store/window.js";
import {useEffect, useState} from "react";

const Navbar = () => {

    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const {openWindow} = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Joscelyn's Portfolio</p>

                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{time.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}
export default Navbar
