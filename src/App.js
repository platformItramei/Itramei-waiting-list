import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
import PrivacyModal from "./styled_components/privacyModal/privacyModal.jsx";

import { useSelector, useDispatch } from "react-redux";
import { toggleTerms } from "./redux/reducers/waiting_list_form.js";
import { togglePrivacy } from "./redux/reducers/modals.js";

import Forms from "./styled_components/form/form.jsx";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900; /* Ensure it's above other components */
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  max-height: 90vh;
  position: relative;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    max-height: 80vh;
    margin: 20px 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
`;

function App() {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on load
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {modals.terms && <TermsModal />}
      {modals.privacy && <PrivacyModal />}

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal} aria-label="Close Modal">
              &times;
            </CloseButton>
            <Forms isModal={true} onClose={handleCloseModal} />
          </ModalContent>
        </ModalOverlay>
      )}

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