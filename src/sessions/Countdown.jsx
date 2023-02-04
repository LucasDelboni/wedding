import { useEffect, useState } from "react";
import Grid2 from '@mui/material/Unstable_Grid2';


const countDownDate = new Date(2023, 10, 7, 16).getTime();

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(countDownDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    if(timeLeft === {}) {
        <></>
    }

    return (
        <div>
            <h1>{timeLeft.days}</h1>
        </div>
    )
}

function calculateTimeLeft(countDownDate) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        return null;
    }
    
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
}