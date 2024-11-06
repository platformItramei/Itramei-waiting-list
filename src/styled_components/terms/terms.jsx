import React from "react";
import { IoMdClose as Close } from "react-icons/io";

//Redux
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/reducers/terms_modal";

//Styled Components
import {
  ModalContainer,
  Header,
  Title,
  Blue,
  SubHeader,
  Text,
  Icon,
} from "./termsStyling";

//Components
import SectionA from "./sections/a";
import SectionB from "./sections/b";
import SectionC from "./sections/c";
import SectionD from "./sections/d";
import SectionE from "./sections/e";
import SectionF from "./sections/f";
import SectionG from "./sections/g";
import SectionH from "./sections/h";
import SectionI from "./sections/i";

export default function TermsModal() {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <Header>
        <Icon onClick={() => dispatch(toggleVisibility())}>
          <Close />
        </Icon>
        <Title>
          Terms of Use for <Blue>Itramei</Blue> Limited Waitlist Forms
        </Title>
        <SubHeader>Last Updated: 4 November 2024 </SubHeader>
        <Text>
          Welcome to the Itramei Limited waitlist forms. By submitting your
          information, you agree to comply with and be bound by these Terms of
          Use. Please read them carefully.
        </Text>
      </Header>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <SectionH />
      <SectionI />
    </ModalContainer>
  );
}
