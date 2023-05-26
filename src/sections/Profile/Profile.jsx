import { Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Title from '../../components/Title';
import Section from '../../components/Section';

import './Profile.css'

export default function Profile() {
    return (
        <Section className="profile">
            <Title title="Os noivos" />
            <Grid container justifyContent="center" columnSpacing={25}>
                <Grid item xs="auto">
                    <Avatar
                        className="profile__avatar"
                        src="profile/lucas-profile.jpg"
                    />
                    <Typography className="profile__name">
                        Lucas
                    </Typography>
                    <Typography className="profile__surname">
                        Delboni
                    </Typography>
                </Grid>
                <Grid item xs="auto" padding={0} display="flex" alignItems="center">
                    <Typography className="profile__and">
                        &
                    </Typography>
                </Grid>
                <Grid item xs="auto">
                    <Avatar
                        className="profile__avatar"
                        src="profile/adriana-profile.jpg"
                    />
                    <Typography className="profile__name">
                        Adriana
                    </Typography>
                    <Typography className="profile__surname">
                        Oliveira
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    )
}