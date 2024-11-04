import React from "react";
import styled from "styled-components";

//Data
import FaqData from "./faqList.json";

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
`;

export default function FaqList() {
  return (
    <Container>
      <Title dark="Frequently Asked" blue="Questions" />
      {Object.entries(FaqData.faqs).map(([key, { question, answer }]) => (
        <FAQ key={key} question={question} answer={answer} />
      ))}
    </Container>
  );
}
