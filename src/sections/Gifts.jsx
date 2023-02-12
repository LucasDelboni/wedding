import Button from '@mui/material/Button';
import Title from '../components/Title';

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
        </>
    );
}