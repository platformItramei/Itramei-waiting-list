import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionD() {
  return (
    <Section>
      <Title>4. Data Collection and Privacy </Title>
      <Text>
        (a) <Heavy>Information Collected</Heavy>: (i){" "}
        <Heavy>Event Interest Registration Waitlist</Heavy>: First name, last
        name, email address, phone number, company, and job title/position. (ii)
        <Heavy>Platform Launch Waitlist</Heavy>: Name and email address. (iii)
        User behavior data for analytical purposes.
      </Text>
      <Text>
        (b) <Heavy>Use of Data</Heavy>: Collected information is used for
        communication, marketing, and potential product development.
      </Text>
      <Text>
        (c) <Heavy>Third-Party Data Sharing</Heavy>: The Company does not sell
        user information to third parties.
      </Text>
      <Text>
        (d) <Heavy>Data Confidentiality</Heavy>: While a formal privacy policy
        is not yet in place, all data is treated with the utmost respect and
        confidentiality.
      </Text>
    </Section>
  );
}
