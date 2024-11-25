import React from "react";
import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";

// Redux
import { useDispatch } from "react-redux";
import { toggleTerms, togglePrivacy } from "../../redux/reducers/modals";

const PrivacyContainer = styled.div`
  ${PlusJakartaSans};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => (props.isModal ? "10px" : "16px")};
`;

const Message = styled.p`
  color: rgba(41, 58, 75, 1);
  font-weight: 500;
  font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "10px" : "12px")};
    margin-top: -6px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isModal ? "11px" : "18px")};
`;

const PrivacyLink = styled.p`
  color: rgba(29, 156, 204, 1);
  font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${({ $border }) =>
    $border &&
    css`
      border-right: solid 1px rgba(217, 218, 223, 1);
      border-left: solid 1px rgba(217, 218, 223, 1);
      padding: 0 16px;
    `}

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  }
`;

const ContactUs = styled.a`
  color: rgba(29, 156, 204, 1);
  font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${({ $border }) =>
    $border &&
    css`
      border-right: solid 1px rgba(217, 218, 223, 1);
      border-left: solid 1px rgba(217, 218, 223, 1);
      padding: 0 16px;
    `}

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  }
`;

export default function Privacy({ isModal }) { // Correctly destructured
  const dispatch = useDispatch();
  const showTerms = () => dispatch(toggleTerms());
  const showPrivacy = () => dispatch(togglePrivacy());
  return (
    <PrivacyContainer isModal={isModal}>
      <Message isModal={isModal}>
        Your privacy is important to us. We will never share your information
      </Message>
      <LinkContainer isModal={isModal}>
        <PrivacyLink isModal={isModal} onClick={showPrivacy}>
          Privacy
        </PrivacyLink>
        <PrivacyLink isModal={isModal} $border onClick={showTerms}>
          Terms of Service
        </PrivacyLink>
        <ContactUs isModal={isModal} href="#footer">
          Contact Us
        </ContactUs>
      </LinkContainer>
    </PrivacyContainer>
  );
}

