import React from "react";
import styled from "styled-components";
import { PlusJakartaSans, Sansation } from "../shared_styles";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(25px);
  z-index: 99;
  display: grid;
  place-items: center;

  ${PlusJakartaSans};
`;

const Modal = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  ${Sansation};
`;

const Message = styled.p`
  line-height: 32px;
`;

const Button = styled.button`
  background-color: rgba(36, 195, 255, 1);
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(36, 195, 255, 0.8);
  }
`;

export default function SuccessModal({ onClick }) {
  return (
    <ModalContainer>
      <Modal>
        <Title>Form submitted!</Title>
        <Message>
          Thank you for joining the waiting list. <br />
          We will be in touch with you shortly.
        </Message>
        <Button onClick={onClick}>Close</Button>
      </Modal>
    </ModalContainer>
  );
}
