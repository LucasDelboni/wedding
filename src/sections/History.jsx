import Box from '@mui/material/Box';

export default function History() {
    return (
        <div>
            <h1>Nossa historia</h1>
            <Box>
                <h3>Nos conhecemos</h3>
                <img 
                    src="/history/nos-conhecemos.jpg"
                    alt="Foto de Adriana e Lucas motando o rack da sala quando começaram a morar juntos."
                    width={"100%"}
                />
                <h3>Começamos a morar juntos</h3>
                <img 
                    src="/history/moved-in-together.jpg"
                    alt="Foto de Adriana e Lucas motando o rack da sala quando começaram a morar juntos."
                    width={"100%"}
                />
                <h3>O pedido</h3>
                <video width={"100%"} controls>
                    <source src="/history/pedido.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </Box>
            
        </div>
    )
}