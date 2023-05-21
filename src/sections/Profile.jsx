import { Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Title from '../components/Title'

export default function Profile() {
    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <Title title="Os noivos"></Title>
                </Grid>
            </Grid>
            <Grid container>
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
                            Adriana Oliveira
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
                            Lucas Delboni
                        </p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}