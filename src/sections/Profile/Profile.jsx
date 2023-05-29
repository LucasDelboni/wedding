import './Profile.css'

import Grid from '@mui/material/Unstable_Grid2';
import Title from '../../components/Title';
import Section from '../../components/Section';
import FadeInText from '../../components/FadeInText';
import FadeInImage from '../../components/FadeInImage';
import { Box } from '@mui/material';


export default function Profile() {
    return (
        <Section className="profile">
            <Title title="Os noivos" />
            <Grid
                container
                justifyContent="center"
                columnSpacing={{ xs: 0, md: 25 }}
            >
                <Grid item xs="auto">
                    <Box className="profile__avatar">
                        <FadeInImage className="profile__avatar-img" src="profile/lucas-profile2.jpg" />
                    </Box>
                    <FadeInText className="profile__name">
                        Lucas
                    </FadeInText>
                    <FadeInText className="profile__surname">
                        Delboni
                    </FadeInText>
                </Grid>
                <Grid item xs="auto" padding={0} display="flex" alignItems="center">
                    <FadeInText className="profile__and">
                        &
                    </FadeInText>
                </Grid>
                <Grid item xs="auto">
                    <Box className="profile__avatar">
                        <FadeInImage className="profile__avatar-img" src="profile/adriana-profile2.jpg" />
                    </Box>
                    <FadeInText className="profile__name">
                        Adriana
                    </FadeInText>
                    <FadeInText className="profile__surname">
                        Oliveira
                    </FadeInText>
                </Grid>
            </Grid>
        </Section>
    )
}