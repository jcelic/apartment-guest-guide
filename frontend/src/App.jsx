import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuideLayout from './layouts/GuideLayout';
import Home from './pages/Home/Home';
import Arrival from './pages/Arrival/Arrival';
import Parking from './pages/Parking/Parking';
import WiFi from './pages/WiFi/WiFi';
import ApartmentInfo from './pages/ApartmentInfo/ApartmentInfo';
import TV from './pages/TV/TV';
import CheckOut from './pages/CheckOut/CheckOut';
import HouseRules from './pages/HouseRules/HouseRules';
import Dishwasher from './pages/Dishwasher/Dishwasher';
import CoffeeMaker from './pages/CoffeeMaker/CoffeeMaker';
import { Toaster } from 'react-hot-toast';
import Explore from './pages/Explore/Explore';
import EmergencyContacts from './pages/EmergencyContacts/EmergencyContacts';
import InvalidLink from './components/InvalidLink/InvalidLink';

const App = () => {
  return (
    <>
      <Toaster position="top-center" />

      <Router>
        <Routes>
          <Route path="/" element={<InvalidLink />} />
          <Route path="/guide" element={<InvalidLink />} />

          <Route path="/guide/:token" element={<GuideLayout />}>
            <Route index element={<Home />} />
            <Route path="arrival" element={<Arrival />} />
            <Route path="parking" element={<Parking />} />
            <Route path="wifi" element={<WiFi />} />
            <Route path="apartment-info" element={<ApartmentInfo />} />
            <Route path="tv" element={<TV />} />
            <Route path="coffee-maker" element={<CoffeeMaker />} />
            <Route path="dishwasher" element={<Dishwasher />} />
            <Route path="house-rules" element={<HouseRules />} />
            <Route path="check-out" element={<CheckOut />} />
            <Route path="explore" element={<Explore />} />
            <Route path="emergency" element={<EmergencyContacts />} />
          </Route>

          <Route path="*" element={<InvalidLink />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
