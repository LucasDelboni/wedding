import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import History from './sections/History';
import Countdown from './sections/Countdown';
import Cerimony from './sections/Cerimony';
import Reception from './sections/Reception';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './sections/Profile';
import Gifts from './sections/Gifts';
import Section from './components/Section';

function App() {
  return (
    <div className="App" >
      <CssBaseline />
        <Section>
          <Profile/>
        </Section>
        <Section even>
          <History/>
        </Section>
        <Section>
          <Countdown/>
        </Section>
        <Section even>
          <Cerimony/>
        </Section>
        <Section>
          <Reception/>
        </Section>
        <Section even>
          <Gifts/>
        </Section>
    </div>
  );
}

export default App;
