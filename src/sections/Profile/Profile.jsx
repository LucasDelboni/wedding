import { Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Title from '../../components/Title';
import Section from '../../components/Section';
import FadeInText from '../../components/FadeInText';

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
                    <Avatar
                        className="profile__avatar"
                        src="profile/adriana-profile.jpg"
                    />
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