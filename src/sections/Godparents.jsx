import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Title from '../components/Title';
import { Grid } from '@mui/material';

export default function Godparents() {
    return (
        <>
            <Title title="Padrinhos e Madrinhas" />
            <Grid container>
                {itemData.map((item) => (
                    <Grid key={item.img} xs={6} md={3} >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className='border_img'
                        />
                        <p>{item.title}</p>
                    </Grid>
                ))}
            </Grid>
            <ImageList>
                
            </ImageList>
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