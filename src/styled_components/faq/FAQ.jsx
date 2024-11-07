import React, { useState } from "react";
import styled, { css } from "styled-components";

// Font
import { PlusJakartaSans } from "../shared_styles";

// Icon
import ArrowActive from "../../assets/icons/ArrowIcon.svg";
import ArrowInactive from "../../assets/icons/arrow-blank.svg";

// Styled Components
const FaqWrapper = styled.div`
  ${PlusJakartaSans};
  width: 100%;
  max-height: 80px;
  max-width: 810px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: solid 1px rgba(233, 233, 231, 1);

  &:hover {
    border: solid 2px #E0EBEF;
  }

  ${({ $open }) =>
    $open &&
    css`
      max-height: 1000px;
    `}

  transition: max-height 1s ease;
`;

const Icon = styled.img`
  transition: transform 0.5s ease;
  ${({ $open }) =>
    $open
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(360deg);
        `}
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 35px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const AnswerContainer = styled.div`
  background-color: #E0EBEF;
  width: 100%;
  border-radius: 0 0 8px 8px;
  padding: 24px;
  cursor: default;

  @media screen and (max-width: 768px) {
    display: none;

    ${({ $open }) =>
      $open &&
      css`
        display: flex;
        height: 100%;
      `}
  }
`;

const Text = styled.p`
  color: rgba(3, 3, 3, 1);
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
`;

export default function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <FaqWrapper $open={open}>
      <QuestionContainer onClick={toggleOpen}>
        <Text>{question}</Text>
        <Icon src={open ? ArrowActive : ArrowInactive} $open={open} />
      </QuestionContainer>
      <AnswerContainer $open={open}>
        <Text>{answer}</Text>
      </AnswerContainer>
    </FaqWrapper>
  );
}