import React from "react";
import styled from "styled-components";

//Data
import FaqData from "./faqData.json";

//Components
import Title from "../reusable/title";
import FAQ from "./FAQ";

//Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 80px 20px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const NoFaqs = styled.p`
  color: red;
  font-size: 18px;
`;

export default function FaqList() {
  return (
    <Container id="faq">
      <Title dark="Frequently Asked" blue="Questions" />
      {FaqData.faqs ? (
        Object.entries(FaqData.faqs).map(([key, { question, answer }]) => (
          <FAQ key={key} question={question} answer={answer} />
        ))
      ) : (
        <NoFaqs>There's no FAQs available at the moment...</NoFaqs>
      )}
    </Container>
  );
}
