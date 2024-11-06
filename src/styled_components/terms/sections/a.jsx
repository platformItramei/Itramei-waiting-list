import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";
export default function SectionA() {
  return (
    <Section>
      <Title>1. General Information</Title>
      <Text>
        (a) <Heavy>Definition of Company</Heavy>: Itramei ("Company," "we,"
        "us," or "our").
      </Text>
      <Text>
        (b) <Heavy>Waitlist Descriptions</Heavy>: (i)
        <Heavy>Platform Launch Waitlist</Heavy>: Intended for users interested
        in receiving updates about the launch of the Itramei platform. (ii)
        <Heavy>Event Interest Registration Waitlist</Heavy>: Designed for users
        who wish to express interest in attending the Company’s launch event in
        Dublin (tentatively scheduled for March, April, or May). Note:
        Registering does not guarantee an invitation due to limited seating.
      </Text>
      <Text>
        (c) <Heavy>Automatic Registration</Heavy>: By registering for the Event
        Interest Registration Waitlist, users are automatically enrolled in the
        Platform Launch Waitlist.
      </Text>
    </Section>
  );
}
