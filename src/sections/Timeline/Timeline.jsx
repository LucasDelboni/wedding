
import React from 'react';
import { Timeline as MuiTimeline } from '@mui/lab';

import './Timeline.css';
import TimelineItem from './Item';
import Title from '../../components/Title';
import { Box, Typography } from '@mui/material';


import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const timelineItems = [
    {
        key: 1,
        icon: 'favorite',
        title: "Nos conhecemos",
        date: "07/07/2017",
        children: (
            <img
                alt="Nos conhecemos"
                className="timeline__image"
                src="timeline/nos-conhecemos.jpg"
            />
        )
    },
    {
        key: 2,
        icon: 'house',
        title: "Começamos a morar juntos",
        date: "04/09/2021",
        children: (
            <img
                alt="Começamos a morar juntos"
                className="timeline__image"
                src="timeline/morar-juntos.jpg"
            />
        )
    },
    {
        key: 3,
        icon: 'diamond',
        children: null,
    }
]

export default function Timeline() {

    return (
        <>
            <Title title="Nossa história" />
            <MuiTimeline className='timeline' position="alternate">
                {timelineItems.map(timelineItem => (<TimelineItem {...timelineItem} />))}
            </MuiTimeline>
            <Box class="proposal">
                <Typography className="proposal__title">
                    <AutoAwesomeIcon />
                    {` O pedido `}
                    <AutoAwesomeIcon />
                </Typography>
                <Typography className="proposal__date">
                    04/10/2022
                </Typography>
                <video className='proposal__video' controls>
                    <source src="timeline/pedido.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </>
    )
}