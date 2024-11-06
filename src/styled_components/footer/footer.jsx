import React from "react";
import { useMediaQuery } from "react-responsive";

// Images / Icon
import LogoIcon from "../../assets/icons/logo.svg";
import MailIcon from "../../assets/icons/mail-icon.svg";

//styled components
import {
  FooterContainer,
  Row,
  FooterTitle,
  EmailList,
  Mail,
  Logo,
  LinkList,
  Link,
  Copyright,
  Name,
  Text,
} from "./footerStyling";

export default function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <FooterContainer id="footer">
      {isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link href="#about">About Us</Link>
          <Link href="#form">Itramei Waitlist</Link>
          <Link href="#form">Event Waitlist</Link>
          <Link href="#faq">FAQ</Link>
        </LinkList>
      )}
      <Row>
        <FooterTitle>
          <Text $title>Contact Us</Text>
          <Text>Feel free to contact us via the relevant mail</Text>
        </FooterTitle>
        <EmailList>
          <Mail src={MailIcon} />
          <Text $border $email>
            presales@itramei.com
          </Text>
          <Text $border $email>
            press@itramei.com
          </Text>
          <Text $border $email>
            info@itramei.com
          </Text>
          <Text $email>investment@itramei.com</Text>
        </EmailList>
      </Row>
      {!isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link href="#about">About Us</Link>
          <Link href="#form">Itramei Waitlist</Link>
          <Link href="#form">Event Waitlist</Link>
          <Link href="#faq">FAQ</Link>
        </LinkList>
      )}
      <Copyright>
        © 2024 <Name>ITRAMEI.</Name> All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
