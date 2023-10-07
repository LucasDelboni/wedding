import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Timeline from './sections/Timeline';
import Countdown from './sections/Countdown';
import Cerimony from './sections/Cerimony';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './sections/Profile';
import Gifts from './sections/Gifts';
import Section from './components/Section';
import Comments from './sections/Comments'
import Bestmen from './sections/Bestmen';
import HeroBanner from './sections/HeroBanner';
import { ThemeProvider, createTheme } from '@mui/material';
import Footer from './sections/Footer/Footer';

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#93AAA5' },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroBanner />
      <Profile />
      <Section even>
        <Timeline />
      </Section>
      <Section even>
        <Bestmen />
      </Section>
      <Section>
        <Cerimony />
      </Section>
      <Gifts />
      <Section>
        <Comments />
      </Section>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
