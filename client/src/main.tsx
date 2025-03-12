import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollTrigger } from "./lib/animations";

// Initialize scroll animation observer after the app is mounted
createRoot(document.getElementById("root")!).render(<App />);

// Initialize scroll animations after application is loaded
window.addEventListener('load', () => {
  ScrollTrigger.setup();
});
