import logo from './logo.svg';
import './App.css';
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
      <History/>
      <Countdown/>
      <Cerimony/>
      <Reception/>
    </div>
  );
}

export default App;
