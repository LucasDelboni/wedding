import AddressMap from "../components/AddressMap";

export default function Cerimony(){

  return (
    <div>
        <h1>Cerimônia</h1>
        <p>Gostaríamos muito de contar com a presença de todos vocês para rezer por nossa felicidade!</p>
        <p>A cerimônia será rápida e tentaremos ser extremamente pontuais. Contamos com vocês!</p>
        <h3><b>Dia 7 de outubro de 2023 na Paróquia Nossa Senhora Achiropita</b></h3>
        <h3><b>Rua Treze de Maio, 478 - Bela Vista, São Paulo - SP, 01327-000</b></h3>
        <AddressMap className='margin-box'
          title="Cerimonia - Paroquia Achiropita" 
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.246645972133!2d-46.64893698446621!3d-23.55739628468502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b6aa35b411%3A0xe29db2eacb26cb77!2sPar%C3%B3quia%20Nossa%20Senhora%20Achiropita!5e0!3m2!1spt-BR!2sbr!4v1675532048120!5m2!1spt-BR!2sbr"
        />
    </div>
  );
}
