import React from "react";
import styled from "styled-components";
import { Sansation } from "../shared_styles";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  line-height: 44px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 27px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  ${Sansation};
  color: rgba(41, 58, 75, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: -2%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const BlueTitle = styled.span`
  color: rgba(27, 146, 191, 1);
`;

// Dark is for the first part of the title and blue is for the second part.
// Ex: <dark>Join the future of<dark> <blue> Effective Communication <blue>

export default function Title({ dark, blue }) {
  return (
    <Container>
      <Text>
        {dark}
        <BlueTitle>{blue}</BlueTitle>
      </Text>
    </Container>
  );
}
