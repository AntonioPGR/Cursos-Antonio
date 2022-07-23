import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
);