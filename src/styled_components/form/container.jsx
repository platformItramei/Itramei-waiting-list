import React from "react";
import styled from "styled-components";

//Components
import Title from "../reusable/title";
import Forms from "./form";

//styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 80px 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export default function WaitingListForm() {
  return (
    <PageContainer>
      <Title dark="Join the Future of" blue="Effective Communication" />
      <Forms />
    </PageContainer>
  );
}
