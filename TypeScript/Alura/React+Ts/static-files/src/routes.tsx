// COMPONENTS
import { Shop } from 'pages/shop/shop';
import { Home } from 'pages/home';
import { DefaultPage } from 'components/defaultPage';

// EXTERNAL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRoutes(){
  return (
    <Router>

      <Routes>
        <Route path='/' element={ <DefaultPage /> }>
          <Route index element={<Home/>} />
          <Route path="loja" element={<Shop/>} />
        </Route>
      </Routes>

    </Router>
  );
}