import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Title from '../../components/Title';

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Timeline as MuiTimeline, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Avatar } from '@mui/material';

import HeartIcon from '@mui/icons-material/Favorite';

import './Timeline.css';
import TimelineItem from './Item';


export default function Timeline() {
    const timelineItems = [
        {
            title: "Nos conhecemos",
            date: "07/07/2017",
            children: (
                <Avatar
                    src="history/nos-conhecemos.jpg"
                    sx={{ width: 240, height: 240 }}
                />
            )
        },
        {
            title: "Começamos a morar juntos",
            date: "04/09/2021",
            children: (
                <Avatar
                    src="history/morar-juntos.jpg"
                    sx={{ width: 240, height: 240 }}
                />
            )
        },
        {
            title: "O pedido",
            date: "04/10/2022",
            children: (
                <video width={"100%"} controls>
                    <source src="history/pedido.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ),
        }
    ]


    return (
        <MuiTimeline className='timeline' position="alternate">
            {timelineItems.map(timelineItem => (<TimelineItem {...timelineItem} />))}
        </MuiTimeline>
    )
}