import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import History from './sections/History';
import Countdown from './sections/Countdown';
import Cerimony from './sections/Cerimony';
import Reception from './sections/Reception';
import Photos from './sections/Photos';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profiel from './sections/Profiel';

function App() {
  return (
    <div className="App" style={{backgroundSize: "100%", backgroundImage: "url('background.png')"}}>
      <CssBaseline />
      <Container style={{backgroundImage: "url('inner-background.jpg')"}}>
        <br></br>
        <Profiel/>
        <History/>
        <Photos/>
        <Countdown/>
        <Cerimony/>
        <Reception/>
      </Container>
    </div>
  );
}

export default App;
