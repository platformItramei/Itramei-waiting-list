import "./App.css";
import CommunicationMaster from "./pages/CommunicationMaster";
import CommunicationBenefits from "./pages/CommunicationBenefits";
import ItrameiBenefits from "./pages/ItrameiBenefits";
import WhyJoinWaitlist from "./pages/WhyJoinWaitlist";
import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import WaitingListForm from "./styled_components/form/container";
import FaqList from "./styled_components/faq/faqList.jsx";
import Footer from "./styled_components/footer/footer";
import TermsModal from "./styled_components/terms/terms.jsx";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleTerms } from "./redux/reducers/waiting_list_form.js";

function App() {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleTerms());
  const visible = useSelector((state) => state.terms.open);

  return (
    <>
      {visible && <TermsModal onClick={toggleModal} />}
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
