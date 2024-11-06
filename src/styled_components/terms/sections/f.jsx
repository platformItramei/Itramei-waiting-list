import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionF() {
  return (
    <Section>
      <Title>6. Disclaimers </Title>
      <Text>
        (a) <Heavy>No Guarantees</Heavy>: Itramei Limited makes no guarantees
        regarding the accuracy, reliability, or availability of the waitlist
        forms or the data collected.
      </Text>
      <Text>
        (b) <Heavy>Standard Disclaimers</Heavy>: Warranties relating to the
        completeness, reliability, or availability of services provided are
        excluded.
      </Text>
    </Section>
  );
}
