import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Splash from './pages/Splash.jsx';
import Login from './pages/Login.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Maintenance from './pages/Maintenance.jsx';
import Fuel from './pages/Fuel.jsx';
import Trips from './pages/Trips.jsx';
import Profile from './pages/Profile.jsx';
import BottomNav from './components/BottomNav.jsx';

function AppContent() {
  const location = useLocation();
  const hiddenPaths = ['/', '/login', '/onboarding'];

  return (
    <div className={hiddenPaths.includes(location.pathname) ? '' : 'pb-28 sm:pb-32'}>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!hiddenPaths.includes(location.pathname) && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
