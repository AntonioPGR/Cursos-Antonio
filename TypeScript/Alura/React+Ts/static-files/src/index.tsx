// COMPONENTS 
import { Header } from 'components/header';
import { Shop } from 'pages/shop/shop';
import { Home } from 'pages/home';

// STYLE
import './index.scss';
import 'normalize.css';

// EXTERNAL
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <StrictMode>

      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loja" element={<Shop/>} />
        </Routes>
      </Router>
      
    </StrictMode>
  );
}

// create root element
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// render the app
root.render(<App />);
