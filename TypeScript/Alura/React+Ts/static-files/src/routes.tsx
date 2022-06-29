// COMPONENTS
import { Shop } from 'pages/shop/shop';
import { Home } from 'pages/home';
import { Header } from 'components/header';

// EXTERNAL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRoutes(){
  return (
    <Router>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loja" element={<Shop/>} />
      </Routes>

    </Router>
  );
}