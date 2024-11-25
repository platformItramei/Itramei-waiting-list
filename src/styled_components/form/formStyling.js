import styled, { css } from "styled-components";
import { Sansation, PlusJakartaSans } from "../shared_styles";

export const FormContainer = styled.div`
  ${PlusJakartaSans};
  width: 100%;
  max-width: ${(props) => (props.isModal ? "600px" : "800px")};
  background-color: white;
  box-shadow: 0 0 24px 0 rgba(29, 156, 204, 0.12);
  border-radius: 12px;
  padding: ${(props) => (props.isModal ? "20px" : "40px")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isModal ? "18px" : "36px")};

  @media screen and (max-width: 1024px) {
    padding: ${(props) => (props.isModal ? "15px" : "30px")};
    box-shadow: 0 0 20px 0 rgba(29, 156, 204, 0.1);
  }

  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.isModal ? "10px" : "20px")};
    box-shadow: 0 0 16px 0 rgba(29, 156, 204, 0.1);
  }
`;

export const FormTitle = styled.p`
  ${Sansation};
  color: rgba(41, 58, 75, 1);
  font-size: ${(props) => (props.isModal ? "20px" : "24px")};
  font-weight: 700;
  line-height: ${(props) => (props.isModal ? "22px" : "27px")};
  width: ${(props) => (props.isModal ? "90%" : "80%")};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "16px" : "16px")};
    width: 100%;
  }
`;

export const SubTitle = styled.p`
  ${PlusJakartaSans};
  font-weight: 400;
  font-size: ${(props) => (props.isModal ? "14px" : "16px")};
  color: rgba(102, 107, 125, 1);
  margin: ${(props) => (props.isModal ? "-12px 0 0 0" : "-16px 0 0 0")};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "12px" : "12px")};
  }
`;

export const Disclaimer = styled.p`
  ${PlusJakartaSans};
  font-weight: 400;
  color: rgba(102, 107, 125, 1);
  grid-column: 1 / 3;
  
  font-size: ${(props) => (props.isModal ? "11px" : "12px")};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap:  ${(props) => (props.isModal ? "10px" : "24px")};

  ${({ $launchList }) =>
    $launchList &&
    css`
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    `};
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: ${(props) => (props.isModal ? "40px" : "48px")};
  border: none;
  border-radius: 8px;
  background-color: rgba(41, 58, 75, 1);
  color: white;
  font-size: ${(props) => (props.isModal ? "14px" : "16px")};
  font-weight: 500;
  margin-top: 8px;
  letter-spacing: 1px;

  ${({ $span }) =>
    $span &&
    css`
      grid-column: 1 / 3;
    `}

  &:hover {
    opacity: 90%;
  }
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "12px" : "14px")};
    height: ${(props) => (props.isModal ? "36px" : "40px")};
  }
`;