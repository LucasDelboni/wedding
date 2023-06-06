import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Title from "../../components/Title";
import "./Countdown.css"


const countDownDate = new Date(2023, 9, 7, 16).getTime();

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(countDownDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    if (timeLeft === {}) {
        <></>
    }

    return (
        <>
            <Title title="Contagem Regressiva"></Title>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 8, lg: 12 }}>
                <Circle text={timeLeft.days} text_bottom={"Dias"} />
                <Circle text={timeLeft.hours} text_bottom={"Horas"} />
                <Circle text={timeLeft.minutes} text_bottom={"Minutos"} />
                <Circle text={timeLeft.seconds} text_bottom={"Segundos"} />
            </Stack>
        </>
    )
}

function Circle({ text, text_bottom }) {
    return (
        <Box>
            <span className="countdown__circle">{text}</span>
            <p className="countdown__text">{text_bottom}</p>
        </Box>
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