import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

export default function AppRouter(){
	return(
		<Router>
      <Routes >
        <Route path="/" element={<mainPage />} />
        <Route path="/cart" element={<shoppingCart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
		</Router>
	);
}