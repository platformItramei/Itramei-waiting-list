import React from "react";
import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";

const PrivacyContainer = styled.div`
  ${PlusJakartaSans};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const Message = styled.p`
  color: rgba(41, 58, 75, 1);
  font-weight: 500;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: -6px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

const PrivacyLink = styled.p`
  color: rgba(29, 156, 204, 1);
  font-size: 14px;
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
    font-size: 12px;
  }
`;

export default function Privacy() {
  return (
    <PrivacyContainer>
      <Message>
        Your privacy is important to us. We will never share your information
      </Message>
      <LinkContainer>
        <PrivacyLink>Privacy</PrivacyLink>
        <PrivacyLink $border>Terms of Service</PrivacyLink>
        <PrivacyLink>Contact Us</PrivacyLink>
      </LinkContainer>
    </PrivacyContainer>
  );
}
