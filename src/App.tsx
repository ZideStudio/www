import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'primeicons/primeicons.css';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
