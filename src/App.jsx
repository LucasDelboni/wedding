import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Timeline from './sections/Timeline';
import Countdown from './sections/Countdown/Countdown';
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

function App() {
  return (
    <>
      <CssBaseline />
      <div style={{backgroundImage: 'url("hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', height: '100%', position: 'relative'}}>
        <div style={{left: 0, width: '100%', textAlign: 'center', color: 'white', position: 'absolute', bottom: '0'}}>
          <h1 style={{fontSize: '5em'}}>Adriana & Lucas</h1>
          <p style={{fontSize: '1em'}} >07 de outubro de 2023 - São Paulo</p>
        </div>
      </div>
      <Section>
        <Profile />
      </Section>
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
        <Comments/>
      </Section>
    </>
  );
}

export default App;
