import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Title from "../../components/Title";
import "./Countdown.css"


const countDownDate = new Date(2023, 9, 7, 16).getTime();

export default function Countdown() {
    const [timeDistance, setTimeDistance] = useState(calculateTimeDistance());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeDistance(calculateTimeDistance(countDownDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            <Title title="Quanto tempo já passou"></Title>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 8, lg: 12 }}>
                <Circle text={timeDistance.days} text_bottom={"Dias"} />
                <Circle text={timeDistance.hours} text_bottom={"Horas"} />
                <Circle text={timeDistance.minutes} text_bottom={"Minutos"} />
                <Circle text={timeDistance.seconds} text_bottom={"Segundos"} />
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

function calculateTimeDistance(countDownDate) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    return {
        days: Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.abs(Math.floor((distance % (1000 * 60)) / 1000))
    };
}