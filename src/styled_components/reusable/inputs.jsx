import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";

//Text Input

export const InputWrapper = styled.div`
  ${PlusJakartaSans};
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${({ $span }) =>
    $span &&
    css`
      grid-column: 1/3;
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  border: solid 1px rgba(208, 213, 221, 1);
  border-radius: 8px;
  outline: none;

  &:focus {
    border: solid 1px rgba(36, 195, 255, 1);
  }
`;

export const Error = styled.p``;

// Checkbox Button

export const CheckboxWrapper = styled.div`
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
  height: 24px;
  width: 24px;
  transform: translateY(-1px);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transform: translateY(-13px);
  }
`;

export const CheckboxLabel = styled.p`
  color: rgba(71, 84, 103, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
