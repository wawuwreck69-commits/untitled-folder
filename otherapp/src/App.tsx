import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BrowseModels from './pages/BrowseModels';
import ModelDetail from './pages/ModelDetail';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FindDealer from './pages/FindDealer';
import LifetimeWarranty from './pages/LifetimeWarranty';
import CustomBoats from './pages/CustomBoats';
import MilitaryProfessional from './pages/MilitaryProfessional';

// Recreational Uses
import SmallFishing from './pages/uses/SmallFishing';
import DinghiesTenders from './pages/uses/DinghiesTenders';
import WaterSports from './pages/uses/WaterSports';
import OffshoreFishing from './pages/uses/OffshoreFishing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="browse-models" element={<BrowseModels />} />
          <Route path="browse-models/p/:id" element={<ModelDetail />} />
          <Route path="find-a-dealer" element={<FindDealer />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="lifetime-warranty" element={<LifetimeWarranty />} />
          <Route path="custom-boats" element={<CustomBoats />} />
          <Route path="military-professional-uses" element={<MilitaryProfessional />} />
          
          <Route path="small-fishing-boats" element={<SmallFishing />} />
          <Route path="dinghies-tenders" element={<DinghiesTenders />} />
          <Route path="water-sports-boats" element={<WaterSports />} />
          <Route path="offshore-fishing-dive-boats" element={<OffshoreFishing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
