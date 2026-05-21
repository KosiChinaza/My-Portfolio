import { useState, useEffect } from "react";
import Navbar from "./component/Reuseable/Navbar";
import Footer from "./component/Reuseable/Footer";
import ScrollToTop from "./component/Reuseable/ScrollToTop";
import Home from "./pages/Home";

/**
 * Root application component.
 * Manages global dark/light mode state and renders the layout shell.
 */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Load the Syne display font from Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-gray-900"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
