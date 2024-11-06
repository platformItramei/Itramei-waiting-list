import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionG() {
  return (
    <Section>
      <Title>7. Data Sharing and Transfers</Title>
      <Text>(a) We do not sell personal data to third parties.</Text>
      <Text>
        (b) Personal data may be disclosed to third-party service providers for
        standard business operations, such as cloud storage and data hosting.
      </Text>
      <Text>
        (c) <Heavy>International Transfers</Heavy>: Personal data may be
        transferred outside your jurisdiction, and such transfers are conducted
        in compliance with applicable data protection laws, using standard
        contractual clauses or other appropriate safeguards.
      </Text>
    </Section>
  );
}
