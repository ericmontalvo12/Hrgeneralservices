import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import PrivacyPolicy from "./app/pages/PrivacyPolicy.tsx";
import TermsOfService from "./app/pages/TermsOfService.tsx";
import PortfolioPage from "./app/pages/PortfolioPage.tsx";
import About from "./app/pages/About.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
