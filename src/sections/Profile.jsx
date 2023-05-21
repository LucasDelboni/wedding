import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Title from '../components/Title'

export default function Profile() {
    return (
        <>
            <Title title="Os noivos"></Title>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ md: 5, lg: 12 }}>
                    <Grid xs={12} md={6}>
                        <div className='photo-text'>
                            <Avatar
                                alt="Remy Sharp"
                                src="profile/lucas2.png"
                                sx={{ width: 276, height: 276 }}
                            />
                        </div>
                        <div className='photo-text'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div className='photo-text'>
                            <Avatar
                                alt="Remy Sharp"
                                src="profile/adriana3.png"
                                sx={{ width: 276, height: 276 }}
                            />
                        </div>
                        <div className='photo-text'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}