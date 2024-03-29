import * as React from 'react';
import Title from '../../components/Title';
import { Grid } from '@mui/material';

import './Bestmen.css'
import FadeInText from '../../components/FadeInText';
import FadeInImage from '../../components/FadeInImage';

export default function Bestmen() {
    return (
        <>
            <Title title="Padrinhos e Madrinhas" />
            <Grid container>
                {itemData.map((item) => (
                    <Grid
                        key={item.title}
                        className="bestmen__frame"
                        xs={6}
                        sm={4}
                        md={3}
                        item
                    >
                        <FadeInImage
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="bestmen__image"
                        />
                        <FadeInText className="bestmen__name">
                            {item.title}
                        </FadeInText>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

const itemData = [
    {
        img: 'bestmen/laury2.jpg',
        title: 'Laury',
    },
    {
        img: 'bestmen/daniela2.jpg',
        title: 'Daniela',
    },
    {
        img: 'bestmen/pedro2.jpg',
        title: 'Pedro',
    },
    {
        img: 'bestmen/lucas2.jpg',
        title: 'Lucas',
    },
    {
        img: 'bestmen/rosane2.jpg',
        title: 'Rosane',
    },
    {
        img: 'bestmen/bruno2.jpg',
        title: 'Bruno',
    },
    {
        img: 'bestmen/thais2.jpg',
        title: 'Thais',
    },
    {
        img: 'bestmen/julio2.jpg',
        title: 'Julio',
    },
    {
        img: 'bestmen/mariana2.jpg',
        title: 'Mariana',
    },
    {
        img: 'bestmen/felix2.jpg',
        title: 'Felix',
    },
    {
        img: 'bestmen/leo2.jpg',
        title: 'Leo',
    },
    {
        img: 'bestmen/ana2.jpg',
        title: 'Ana',
    },
    {
        img: 'bestmen/matheus2.jpg',
        title: 'Matheus',
    },
    {
        img: 'bestmen/denis2.jpg',
        title: 'Denis',
    },
    {
        img: 'bestmen/fabian2.jpg',
        title: 'Fabian',
    },
    {
        img: 'bestmen/gabryel2.jpg',
        title: 'Gabryel',
    },
];