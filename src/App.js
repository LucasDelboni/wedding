import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import History from './sections/History';
import Countdown from './sections/Countdown';
import Cerimony from './sections/Cerimony';
import Reception from './sections/Reception';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <History/>
        <Countdown/>
        <Cerimony/>
        <Reception/>
      </Container>
    </div>
  );
}

export default App;
