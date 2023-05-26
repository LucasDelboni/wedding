import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardContent } from "@mui/material";
import Title from '../components/Title';

export default function Cerimony() {

  return (
    <>
      <Title title="Endereços" />
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <EventCard
            title="Cerimônia"
            name="Paróquia Nossa Senhora Achiropita"
            address="Rua Treze de Maio, 478 - Bela Vista, São Paulo - SP, 01327-000"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.246645972133!2d-46.64893698446621!3d-23.55739628468502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b6aa35b411%3A0xe29db2eacb26cb77!2sPar%C3%B3quia%20Nossa%20Senhora%20Achiropita!5e0!3m2!1spt-BR!2sbr!4v1675532048120!5m2!1spt-BR!2sbr"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <EventCard
            title="Recepção"
            name="Spazio Giardino"
            address="R. Padre Estevão Pernet, 276 - Tatuapé, São Paulo - SP, 03315-000"
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14630.818977306324!2d-46.5722102!3d-23.5431196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb635fd14accfeaa!2sEspa%C3%A7o%20Bonjardim!5e0!3m2!1spt-BR!2sbr!4v1675532681335!5m2!1spt-BR!2sbr"
          />
        </Grid>
      </Grid>
    </>
  );
}

function EventCard({ title, name, address, url }) {
  return (
    <Card>
      <CardContent>
        <h3>{title}</h3>
        <p>{name}</p>
        <p>{address}</p>
        <AddressMap className='margin-box'
          title={name}
          url={url}
        />
      </CardContent>
    </Card>
  )
}

function AddressMap({ url, title }) {
  return (
    <iframe
      src={url}
      height="400px"
      width="100%"
      title={title}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
