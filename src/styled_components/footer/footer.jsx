import React from "react";
import { useMediaQuery } from "react-responsive";

// Images / Icon
import LogoIcon from "../../assets/icons/itramei-logo-white.png";
import MailIcon from "../../assets/icons/mail-icon.png";

//styled components
import {
  FooterContainer,
  Row,
  FooterTitle,
  EmailList,
  Email,
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
    <FooterContainer>
      {isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link>About Us</Link>
          <Link>Itramei Waitlist</Link>
          <Link>Event Waitlist</Link>
          <Link>FAQ</Link>
        </LinkList>
      )}
      <Row>
        <FooterTitle>
          <Text $title>Contact Us</Text>
          <Text>Feel free to contact us via the relevant mail</Text>
        </FooterTitle>
        <EmailList>
          <Mail src={MailIcon} />
          <Text>presales@itramei.com</Text>
          <Text>press@itramei.com</Text>
          <Text>info@itramei.com</Text>
          <Text>investment@itramei.com</Text>
        </EmailList>
      </Row>
      {!isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link>About Us</Link>
          <Link>Itramei Waitlist</Link>
          <Link>Event Waitlist</Link>
          <Link>FAQ</Link>
        </LinkList>
      )}
      <Copyright>
        © 2024 <Name>ITRAMEI.</Name> All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
