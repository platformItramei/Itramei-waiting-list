import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  box-shadow: 0 0 24px 0 rgba(29, 156, 204, 0.12);
  border-radius: 12px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const FormTitle = styled.p`
  color: rgba(41, 58, 75, 1);
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  width: 80%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: rgba(102, 107, 125, 1);
  margin: -16px 0 0 0;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Disclaimer = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: rgba(102, 107, 125, 1);
  grid-column: 1 / 3;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;

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
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: rgba(41, 58, 75, 1);
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;

  ${({ $span }) =>
    $span &&
    css`
      grid-column: 1 / 3;
    `}

  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
  }
`;
