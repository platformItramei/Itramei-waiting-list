import React from "react";
import { useMediaQuery } from "react-responsive";

//Redux
import { useDispatch } from "react-redux";
import { setForm } from "../../redux/reducers/waiting_list_form";

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
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleClick = (type) => {
    dispatch(setForm(type));
  };

  return (
    <FooterContainer id="footer">
      {isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link href="#about">About Us</Link>
          <Link href="#form" onClick={() => handleClick("itramei")}>
            Itramei Waitlist
          </Link>
          <Link href="#form" onClick={() => handleClick("launch")}>
            Event Waitlist
          </Link>
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
          <Link $border $email href="mailto:presale@itramei.com">
            presales@itramei.com
          </Link>
          <Link $border $email href="mailtp:press@itramei.com">
            press@itramei.com
          </Link>
          <Link $border $email href="mailto:info@itramei.com">
            info@itramei.com
          </Link>
          <Link $email href="maialto:investment@itramei.com">
            investment@itramei.com
          </Link>
        </EmailList>
      </Row>
      {!isMobile && (
        <LinkList>
          <Logo src={LogoIcon} />
          <Link href="#about">About Us</Link>
          <Link href="#form" onClick={() => handleClick("itramei")}>
            Itramei Waitlist
          </Link>
          <Link href="#form" onClick={() => handleClick("launch")}>
            Event Waitlist
          </Link>
          <Link href="#faq">FAQ</Link>
        </LinkList>
      )}
      <Copyright>
        © 2024 <Name>ITRAMEI.</Name> All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
