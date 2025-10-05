import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Cursor from "./Components/Cursor";
import Lenisscroll from "./Components/Lenisscroll";
import Navigation from "./Components/Navigation";
import Herosection from "./Components/Herosection";
import Featuresection from "./Components/Featuresection";
import Subfeaturesection from "./Components/Subfeaturesection";
import CTAsection from "./Components/CTAsection";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrolltoTop";

// Pages
import FundpartnerPage from "./Pages/FundpartnerPage";
import Partnership from "./Pages/PartnershipPage";
import TeamPage from "./Pages/TeamPage";
import PrivacyPage from "./Pages/PrivacyPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";

export default function App() {
  return (
    <Router>
      <Lenisscroll />
      <Cursor />
      <ScrollToTop />
      <Navigation />

      <Routes>
        {/* Home Page (your existing flow) */}
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <Featuresection />
              <Subfeaturesection />
              <CTAsection />
              <Testimonial />
            </>
          }
        />

        {/* Premium Pages */}
        <Route path="/fundpartners" element={<FundpartnerPage />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/privacypage" element={<PrivacyPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
