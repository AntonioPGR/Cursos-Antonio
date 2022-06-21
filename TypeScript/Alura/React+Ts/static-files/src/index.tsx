// NORMAL IMPORTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// COMPONENTS IMPORT
import { Cardapio } from "./pages/cardapio/cardapio";

// STYLE
import "./index.css";

function App(){
  return (
    <StrictMode>

      <Cardapio />

    </StrictMode>
  );
}

// create root element
const container = document.getElementById("root") as HTMLElement;
const root =  createRoot(container);
// render the app
root.render(<App />);