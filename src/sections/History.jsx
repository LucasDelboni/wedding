import Box from '@mui/material/Box';

export default function History() {
    return (
        <div>
            <h1>O pedido</h1>
            <Box>
                <video width={"100%"} controls>
                    <source src="/history/pedido.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </Box>
            
        </div>
    )
}