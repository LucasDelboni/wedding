import { Box, Typography } from '@mui/material';

import './HeroBanner.css'

export default function HeroBanner() {

  return (
    <Box component="section" className="hero-banner">
      <Box className="hero-banner__image" />
      <Box className="hero-banner__text">
        <Typography variant="h1" className="hero-banner__title">
          Adriana <span className="hero-banner__and">&</span> Lucas
        </Typography>
        <Typography className="hero-banner__date">
          07 de outubro de 2023 - São Paulo
        </Typography>
      </Box>
    </Box>
  );
}