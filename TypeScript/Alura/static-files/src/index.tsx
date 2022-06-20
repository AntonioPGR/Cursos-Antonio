import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App(){
  return (
    <StrictMode>

      <div>Hello World</div>

    </StrictMode>
  );
}

const container = document.getElementById("root") as HTMLElement;
const root =  createRoot(container);
root.render(<App />);