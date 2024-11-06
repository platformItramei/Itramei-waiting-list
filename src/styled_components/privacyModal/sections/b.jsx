import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionB() {
  return (
    <Section>
      <Title>2. Company Information</Title>
      <Text>
        (a) <Heavy>Company name</Heavy>: Itramei Limited
      </Text>
      <Text>
        (b) <Heavy>Contact Information</Heavy>: contact@itramei.com
      </Text>
      <Text>
        (c) <Heavy>Registered Address</Heavy>: 20 Harcourt Street, Dublin 2,
        Ireland, D02 H364
      </Text>
    </Section>
  );
}
