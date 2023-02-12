import { useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Title from "../components/Title";


const countDownDate = new Date(2023, 10, 7, 16).getTime();

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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid xs={3}>
                        <Circle text={timeLeft.days} text_bottom={"Dias"} />
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.hours} text_bottom={"Horas"} />
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.minutes} text_bottom={"Minutos"} />
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.seconds} text_bottom={"Segundos"} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

function Circle({ text, text_bottom}) {
    return (
        <>
            <span className="size-x circle">{text}</span>
            <p className="circle_text">{text_bottom}</p>
        </>
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