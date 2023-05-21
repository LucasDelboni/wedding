
import React from 'react';
import { Timeline as MuiTimeline } from '@mui/lab';
import { Avatar } from '@mui/material';

import './Timeline.css';
import TimelineItem from './Item';
import Title from '../../components/Title';


export default function Timeline() {
    const timelineItems = [
        {
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
            title: "O pedido",
            date: "04/10/2022",
            children: (
                <video width={"100%"} controls>
                    <source src="timeline/pedido.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ),
        }
    ]


    return (
        <>
            <Title title="Nossa história" />
            <MuiTimeline className='timeline' position="alternate">
                {timelineItems.map(timelineItem => (<TimelineItem {...timelineItem} />))}
            </MuiTimeline>
        </>
    )
}