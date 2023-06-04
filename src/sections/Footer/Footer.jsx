import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Paper, Typography } from "@mui/material";
import { faHeart , faWineGlass} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
      <Paper sx={{
        width: '100%',
        bottom: 0,
        backgroundColor: '#c6d2d9'
      }} component="footer" variant="outlined">
        <Container maxWidth="lg">  
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="caption" color="initial" style={{marginTop: '1%', marginBottom: '1%'}}>
              Feito com <FontAwesomeIcon icon={faHeart} style={{color: "#d71414",}} /> <FontAwesomeIcon icon={faWineGlass} style={{color: "#830b1d",}} /> por Lucas, Adriana, Denis e Laury
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }