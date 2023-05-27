import { Box } from '@mui/material';

import './HeroBanner.css'
import FadeInText from '../../components/FadeInText';

export default function HeroBanner() {

  return (
    <Box component="section" className="hero-banner">
      <Box className="hero-banner__image" />
      <Box className="hero-banner__text">
        <FadeInText
          component="h1"
          className="hero-banner__title"
        >
          Adriana & Lucas
        </FadeInText>
        <FadeInText className="hero-banner__date" delay="1">
          07 de outubro de 2023 - São Paulo
        </FadeInText>
      </Box>
    </Box>
  );
}