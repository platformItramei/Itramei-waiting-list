import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";
//Text Input


export const InputWrapper = styled.div`
  ${PlusJakartaSans};
  height: ${(props) => (props.isModal ? "60px" : "70px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;

  ${({ $span }) =>
    $span &&
    css`
      grid-column: 1/3;
    `}
`;

export const Label = styled.label`
  font-size: ${(props) => (props.isModal ? "12px" : "14px")};
  line-height: ${(props) => (props.isModal ? "18px" : "20px")};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: ${(props) => (props.isModal ? "36px" : "44px")};
  padding: ${(props) => (props.isModal ? "8px 12px" : "10px 14px")};
  border: solid 1px rgba(208, 213, 221, 1);
  border-radius: 8px;
  outline: none;
  font-size: ${(props) => (props.isModal ? "12px" : "14px")};

  &:focus {
    border: solid 1px rgba(36, 195, 255, 1);
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "10px" : "12px")};
    height: ${(props) => (props.isModal ? "32px" : "40px")};
    padding: ${(props) => (props.isModal ? "6px 10px" : "8px 12px")};
  }
`;

export const Error = styled.p`
  position: absolute;
  top: ${(props) => (props.$terms ? (props.isModal ? "30px" : "75px") : "75px")};
  right: 0;
  color: red;
  font-size: ${(props) => (props.isModal ? "10px" : "12px")};

  @media screen and (max-width: 768px) {
    ${({ $terms, isModal }) =>
      $terms &&
      css`
        top: ${isModal ? "50px" : "60px"};
      `}
    font-size: ${(props) => (props.isModal ? "8px" : "10px")};
  }
`;
// Checkbox Button

export const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ $span }) =>
    $span &&
    css`
      grid-column: 1/3;
    `}
`;

export const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    transform: translateY(-13px);
  }
`;

export const CheckboxLabel = styled.p`
  ${PlusJakartaSans};
  color: rgba(71, 84, 103, 1);
  font-weight: 400;
  font-size: ${(props) => (props.isModal ? "12px" : "14px")};
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isModal ? "10px" : "12px")};
  }
`;