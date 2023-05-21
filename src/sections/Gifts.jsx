import Button from '@mui/material/Button';
import Title from '../components/Title';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Gifts() {
    const pix = '00020101021126580014br.gov.bcb.pix013604d64d51-72a6-436c-b97c-e5bd88a326aa5204000053039865802BR5919Lucas covre Delboni6009SAO PAULO622905251FC4P0HBRRVBGJR6MD47JA99V63042FF9';
    function copyToClipboard() {
        navigator.clipboard.writeText(pix);
    }

    return (
        <>
            <Title title='Lista de presentes' />
            <p>Para nos presentear, basta nos enviar um <b>Pix</b> de qualquer valor para:</p>
            <img
                src="pix-qr-code.png"
                alt="pix qr code"
            />
            <p>Pix copia e cola: {pix}</p>
            <Button variant="contained" onClick={copyToClipboard}>Copiar</Button>
            <p>E para te ajudar, aqui vai uma lista de coisas que queremos comprar</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <GiftCard
                        src="gifts/couch.webp"
                        alt="Sofá reclinavel"
                        description="Sofa para a Adriana dormir com a TV ligada"
                        price="3.500,00"
                    />
                    <GiftCard
                        src="gifts/computer.webp"
                        alt="Computador gamer"
                        description="Computador gamer com LEDs"
                        price="7.000,00"
                    />
                    <GiftCard
                        src="gifts/air-fryer.jpg"
                        alt="Air fryer"
                        description="Air fryer"
                        price="700,00"
                    />
                    <GiftCard
                        src="gifts/travel.webp"
                        alt="Mapa mundi"
                        description="Viagem internacional"
                        price="15.000,00"
                    />
                    <GiftCard
                        src="gifts/lunch.jpg"
                        alt="Vista do terraço italia"
                        description="Jantar no terraço italia"
                        price="360,00"
                    />
                    <GiftCard
                        src="gifts/cake-mixer.webp"
                        alt="Batedeira de bolo"
                        description="Batedeira de bolo"
                        price="300,00"
                    />
                    <GiftCard
                        src="gifts/phone.webp"
                        alt="Fone sony wh-1000xm4"
                        description="Fone sony wh-1000xm4"
                        price="2.000,00"
                    />
                    <GiftCard
                        src="gifts/pizza.webp"
                        alt="Pizza"
                        description="Pizza"
                        price="40,00"
                    />
                    <GiftCard
                        src="gifts/vinho.webp"
                        alt="Vinho 3 medallas rose"
                        description="Vinho 3 medallas rose"
                        price="40,00"
                    />
                </Grid>
            </Box>
        </>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function GiftCard({ src, alt, description, price }) {
    return (
        <Grid item xs={2} sm={4} md={4} key={src}>
            <Item>
                <CardMedia
                    component="img"
                    height="240"
                    image={src}
                    alt="green iguana"
                />
                <p gutterBottom variant="h5" component="div">
                    {description}
                </p>
                <p variant="body2" color="text.secondary">
                    R$: {price}
                </p>
            </Item>
        </Grid>
    );
}