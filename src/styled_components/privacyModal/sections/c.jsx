import React from "react";
import { Section, Title, Text, Heavy } from "./sectionStyles";

export default function SectionC() {
  return (
    <Section>
      <Title>3. Data Collection</Title>
      <Text>
        (a) <Heavy>Categories of Personal Data</Heavy>: We collect and process
        the following types of personal data (i)
        <Heavy>For event waitlists</Heavy>: first name, last name, email
        address, phone number, company name, and job title/position. (ii)
        <Heavy>For Itramei waitlists</Heavy>: name and email address. (iii) User
        behavior data for analytical purposes.
      </Text>
      <Text>
        (b) <Heavy>Source of Data</Heavy>: Personal data is collected directly
        from you when you sign up for our waitlist.
      </Text>
    </Section>
  );
}
