import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'primeicons/primeicons.css';
import { Router } from './Router';

function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
