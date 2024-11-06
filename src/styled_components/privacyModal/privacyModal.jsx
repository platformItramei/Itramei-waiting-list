import React from "react";
import { IoMdClose as Close } from "react-icons/io";

//Redux
import { useDispatch } from "react-redux";
import { togglePrivacy } from "../../redux/reducers/modals";

//Styled Components
import {
  ModalContainer,
  Header,
  Title,
  Blue,
  SubHeader,
  Icon,
} from "./privacyStyling";

//Sections
import SectionA from "./sections/a";
import SectionB from "./sections/b";
import SectionC from "./sections/c";
import SectionD from "./sections/d";
import SectionE from "./sections/e";
import SectionF from "./sections/f";
import SectionG from "./sections/g";
import SectionH from "./sections/h";
import SectionI from "./sections/i";
import SectionJ from "./sections/j";
import SectionK from "./sections/k";
import SectionL from "./sections/l";

export default function PrivacyModal() {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <Header>
        <Icon>
          <Close onClick={() => dispatch(togglePrivacy())} />
        </Icon>
        <Title>
          Privacy Policy for <Blue>Itramei</Blue> Waitlist forms
        </Title>
        <SubHeader>Last Updated: 4 November 2024</SubHeader>
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
      <SectionJ />
      <SectionK />
      <SectionL />
    </ModalContainer>
  );
}
