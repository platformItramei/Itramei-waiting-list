import "./App.css";

//Sections
import CommunicationMaster from "./pages/CommunicationMaster";
import CommunicationBenefits from "./pages/CommunicationBenefits";
import ItrameiBenefits from "./pages/ItrameiBenefits";
import WhyJoinWaitlist from "./pages/WhyJoinWaitlist";
import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import WaitingListForm from "./styled_components/form/container";
import FaqList from "./styled_components/faq/faqList.jsx";
import Footer from "./styled_components/footer/footer";

//Modals
import TermsModal from "./styled_components/terms/terms.jsx";
import PrivacyModal from "./styled_components/privacyModal/privacyModal.jsx";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleTerms } from "./redux/reducers/waiting_list_form.js";
import { togglePrivacy } from "./redux/reducers/modals.js";

function App() {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  return (
    <>
      {modals.terms && <TermsModal />}
      {modals.privacy && <PrivacyModal />}
      <div className="App">
        <Navbar />
        <HeroSection />
        <CommunicationMaster />
        <CommunicationBenefits />
        <ItrameiBenefits />
        <WhyJoinWaitlist />
        <WaitingListForm />
        <FaqList />
        <Footer />
      </div>
    </>
  );
}

export default App;
