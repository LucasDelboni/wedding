import * as React from 'react';
import Title from '../../components/Title';
import { Grid } from '@mui/material';

import './Bestmen.css'

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
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className="bestmen__image"
                        />
                        <p className="bestmen__name">{item.title}</p>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

const itemData = [
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Laury',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Daniela',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Pedro',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Lucas',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Rosane',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Bruno',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Thais',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Julio',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Maria',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Lucas',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Mariana',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Felix',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Leo',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Ana',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Matheus',
    },
    {
        img: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-preto-e-branco-fotografia-preto-e-branco-tecnicas.jpg',
        title: 'Denis',
    }
];