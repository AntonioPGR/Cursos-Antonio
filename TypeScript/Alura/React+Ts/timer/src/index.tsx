import React from "react";
import ReactDOM from "react-dom";
// Components Import
import { Formulario } from "./components/form";


// Returns the app Component
function App() {
  return (

    <div>
      <Formulario />
    </div>

  );
}

// Render the app into the DOM
ReactDOM.render(
  (
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ), 
  document.getElementById("root")
);