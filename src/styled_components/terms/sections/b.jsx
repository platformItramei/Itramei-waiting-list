import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionB() {
  return (
    <Section>
      <Title>2. Eligibility</Title>
      <Text>
        (a) <Heavy>Event Attendance Confirmation</Heavy>: By signing up for the
        Event Interest Registration Waitlist, users confirm their intent to
        attend the event in person in Dublin.
      </Text>
      <Text>
        (b) <Heavy>Required Information</Heavy>: (i)
        <Heavy>Event Interest Registration Waitlist</Heavy>: First name, last
        name, email address, phone number, company, and job title/position. (ii)
        <Heavy>Platform Launch Waitlist</Heavy>: Name and email address.
      </Text>
    </Section>
  );
}
