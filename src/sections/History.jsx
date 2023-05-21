import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Title from '../components/Title';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function History() {
    return (
        <div>
            <Title title="Nossa historia"/>

            <div style={wrapper}>
                <TimeLineItem title="Nos conhecemos">
                    <img
                        src="history/nos-conhecemos.jpg"
                        alt="Foto de Adriana e Lucas motando o rack da sala quando começaram a morar juntos."
                        width={"100%"}
                    />
                </TimeLineItem>
                <TimeLineItem title="Começamos a morar juntos">
                    <img
                        src="history/moved-in-together.jpg"
                        alt="Foto de Adriana e Lucas motando o rack da sala quando começaram a morar juntos."
                        width={"100%"}
                    />
                </TimeLineItem>
                <TimeLineItem title="O pedido">
                    <video width={"100%"} controls>
                        <source src="history/pedido.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </TimeLineItem>
            </div>

            
            <h3>E muitos outros momentos incríveis</h3>
            <Box sx={{ height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {photos.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
}
  
const lineStyle = {
    borderLeft: '1px solid #bdbdbd',
    borderRight: '1px solid #bdbdbd',
    height: '15vh',
    marginBottom: '1vh'
}

const Line = () => <div id="timeline1" style={lineStyle} />

const TimeLineItem = ({title, children}) => {
    return (
      <>
        <Line/>
        <Typography variant="h5">
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ md: 5, lg: 12 }}>
                <Grid xs={0} md={3}/>
                <Grid xs={12} md={6}>
                    {children}
                </Grid>
                <Grid xs={0} md={3}/>
            </Grid>
        </Box>
        <div style={{marginBottom: '2vh'}}/>
      </>
    );
};

const photos = [
    {
        img: 'history/nos-conhecemos.jpg',
        title: 'Nos conhecemos',
    },
    {
        img: 'history/moved-in-together.jpg',
        title: 'Começamos a morar juntos',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];