import Button from '@mui/material/Button';
import Title from '../components/Title';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function Gifts() {
    const pix = '00020101021126580014br.gov.bcb.pix013604d64d51-72a6-436c-b97c-e5bd88a326aa5204000053039865802BR5919Lucas covre Delboni6009SAO PAULO622905251FC4P0HBRRVBGJR6MD47JA99V63042FF9';
    function copyToClipboard() {
        navigator.clipboard.writeText(pix);
    }

    return (
        <>
            <Title title='Lista de presentes'/>
            <p>Para nos presentear, basta nos enviar um <b>Pix</b> de qualquer valor para:</p>
            <img
                src="pix-qr-code.png"
                alt="pix qr code"
            />
            <p>Pix copia e cola: {pix}</p>
            <Button variant="contained" onClick={copyToClipboard}>Copiar</Button>
            <p>E para te ajudar, aqui vai uma lista de coisas que queremos comprar</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ md: 5, lg: 12 }}>
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
                        alt="fone sony wh-1000xm4"
                        description="Fone sony wh-1000xm4"
                        price="2.000,00"
                    />
                    <GiftCard
                        src="gifts/phone.webp"
                        alt="fone sony wh-1000xm4"
                        description="Fone sony wh-1000xm4"
                        price="2.000,00"
                    />
                </Grid>
            </Box>
        </>
    );
}


  
function GiftCard({src, alt, description, price}) {
    return (
        <Grid xs={6} md={3}>
            <Card>
                <CardContent>
                    <div style={{width: '174px', height: '174px'}}>
                        <img
                            src={src}
                            alt={alt}
                            width='100%'
                            height='100vh'
                        />
                    </div>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <Typography color="text.secondary">
                        R$: {price}
                    </Typography>
                </CardContent>
            </Card>
      </Grid>
    );
}