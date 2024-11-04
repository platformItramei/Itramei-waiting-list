import React, { useState } from "react";
import styled, { css } from "styled-components";

//Icon
import ArrowActive from "../../assets/icons/arrow-active.svg";
import ArrowInactive from "../../assets/icons/arrow-inactive.svg";

//Styled Components
const FaqWrapper = styled.div`
  width: 100%;
  max-height: 70px;
  max-width: 810px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: solid 1px rgba(233, 233, 231, 1);

  ${({ $open }) =>
    $open &&
    css`
      max-height: 400px;
    `}

  transition: all 1s ease;
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
  padding: 20px 30px;
`;

const AnswerContainer = styled.div`
  background-color: rgba(222, 246, 255, 1);
  width: 100%;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  padding: 24px;
`;

const Text = styled.p`
  color: rgba(3, 3, 3, 1);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export default function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <FaqWrapper $open={open}>
      <QuestionContainer onClick={toggleOpen}>
        <Text>{question}</Text>
        {open ? (
          <Icon src={ArrowActive} $open={open} />
        ) : (
          <Icon src={ArrowInactive} $open={open} />
        )}
      </QuestionContainer>
      <AnswerContainer $open={open}>
        <Text>{answer}</Text>
      </AnswerContainer>
    </FaqWrapper>
  );
}
