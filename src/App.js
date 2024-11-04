import './App.css';
import CommunicationMaster from './pages/CommunicationMaster';
import CommunicationBenefits from './pages/CommunicationBenefits';
import ItrameiBenefits from './pages/ItrameiBenefits';
import WhyJoinWaitlist from './pages/WhyJoinWaitlist';
import HeroSection from './pages/HeroSection';
import Navbar from './components/Navbar';
function App() {
  return (
      <div className="App">
          <Navbar />
          <HeroSection />
        <CommunicationMaster />
        <CommunicationBenefits/>
        <ItrameiBenefits/>
        <WhyJoinWaitlist/>
      </div>
  );
}

export default App;
