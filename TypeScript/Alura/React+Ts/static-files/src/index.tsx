// NORMAL IMPORTS
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// COMPONENTS IMPORT
import { Header } from 'components/header';
import { Shop } from 'pages/shop/shop';
// import { Home } from 'pages/home';

// STYLE
import './index.scss';
import 'normalize.css';

function App() {
  return (
    <StrictMode>

      <Header />
      <Shop />
      {/* <Home /> */}
      
    </StrictMode>
  );
}

// create root element
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// render the app
root.render(<App />);
