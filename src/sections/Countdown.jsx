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

    if(timeLeft === {}) {
        <></>
    }

    return (
        <div>
            <Title title="Contagem Regressiva"/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <Circle text={timeLeft.days}/>
                        <span>Dias</span>
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.hours}/>
                        <span>Horas</span>
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.minutes}/>
                        <span>Minutos</span>
                    </Grid>
                    <Grid xs={3}>
                        <Circle text={timeLeft.seconds}/>
                        <span>Segundos</span>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

function Circle({text}) {
    return (
        <div>
            <span>{text}</span>
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