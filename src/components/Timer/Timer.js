import React, {useState, useEffect, useRef} from 'react';
import "./Timer.scss";
import {useTranslation} from "react-i18next";


const Timer = ({className = ''}) => {
    const {t} = useTranslation();
    const [timerDays, setTimerDays] = useState("0");
    const [timerHours, setTimerHours] = useState("0");
    const [timerMinutes, setTimerMinutes] = useState("0");
    // const [timerSeconds, setTimerSeconds] = useState("0");
    const [desktop, setDesktop] = useState(false);

    const resize = () => (window.innerWidth < 1024) ? setDesktop(false) : setDesktop(true);
    let interval = useRef();
    let interval2;

    const startTimer = () => {
        const finishUTC = new Date("March 5, 2022 00:00:00");
        interval = setTimeout(function TimeLogic() {
            const now = new Date();
            const nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            const distance = finishUTC - nowUTC;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearTimeout(interval.current)
            } else {
                setTimerDays(`${days}`);
                setTimerHours(`${hours}`);
                setTimerMinutes(`${minutes}`);
                // setTimerSeconds(`${seconds}`);
            }
            interval2 = setTimeout(TimeLogic, 1000);
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearTimeout(interval.current);
            window.removeEventListener('resize', resize)
        };
    }, [desktop])
    return (
        <div className={"token__counter__main__wrap"}>
            <div
                className={`token__counter__container ${className}`}>
                <div className={`token__counter__box ${className}`}>
                    <div className={`token__counter__time ${className}`}>
                        <div>
                            <div className={`token__counter__item ${className}`}>
                            <span
                                className={`time_number ${className}`}>{timerDays < 10 ? `0${timerDays}` : timerDays}</span>
                            </div>
                            <span className={`time_number_description ${className}`}>{t("timer.days")}</span>
                        </div>
                        <div>
                            <div className={`token__counter__item ${className}`}>
                            <span
                                className={`time_number ${className}`}>{timerHours < 10 ? `0${timerHours}` : timerHours}</span>
                            </div>
                            <span className={`time_number_description ${className}`}>{t("timer.hours")}</span>
                        </div>
                        <div>
                            <div className={`token__counter__item ${className}`}>
                                <span
                                    className={`time_number ${className}`}>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</span>
                            </div>
                            <span className={`time_number_description ${className}`}>{t("timer.minutes")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
