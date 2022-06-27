// NORMAL IMPORTS
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// COMPONENTS IMPORT
import { Header } from 'components/header';
import { Cardapio } from './pages/cardapio/cardapio';
// import { Home } from 'pages/home';

// STYLE
import './index.scss';
import 'normalize.css';

function App() {
  return (
    <StrictMode>

      <Header />
      <Cardapio />
      {/* <Home /> */}
      
    </StrictMode>
  );
}

// create root element
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// render the app
root.render(<App />);
