import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Timeline from './sections/Timeline';
import Countdown from './sections/Countdown/Countdown';
import Cerimony from './sections/Cerimony';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './sections/Profile/Profile';
import Gifts from './sections/Gifts';
import Section from './components/Section';
import Comments from './sections/Comments'
import Bestmen from './sections/Bestmen';
import HeroBanner from './sections/HeroBanner';

function App() {
  return (
    <>
      <CssBaseline />
      <HeroBanner />
      <Profile />
      <Section even>
        <Timeline />
      </Section>
      <Section>
        <Countdown />
      </Section>
      <Section even>
        <Bestmen />
      </Section>
      <Section>
        <Cerimony />
      </Section>
      <Section even>
        <Gifts />
      </Section>
      <Section>
        <Comments />
      </Section>
    </>
  );
}

export default App;
