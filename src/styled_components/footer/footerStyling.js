import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";

export const FooterContainer = styled.footer`
  ${PlusJakartaSans};
  background-color: rgba(41, 58, 75, 1);
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  color: white;

  @media screen and (max-width: 1000px) {
    padding: 40px 10px;
    flex: reverse;
    gap: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: grid;
  }
`;

//Contact

export const FooterTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

export const EmailList = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  ${({ $title }) =>
    $title &&
    css`
      font-size: 32px;
      font-weight: 700;
    `}

  ${({ $border }) =>
    $border &&
    css`
      border-right: solid 1px white;
      padding: 0 10px;
    `}

    @media screen and (max-width: 1100px) {
    ${({ $email }) =>
      $email &&
      css`
        font-size: 12px;
      `}
  }

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    letter-spacing: 0.5px;

    ${({ $title }) =>
      $title &&
      css`
        font-size: 32px;
        font-weight: 700;
      `}

    ${({ $border }) =>
      $border &&
      css`
        border-right: none;
        padding: 0;
      `}
  }
`;

export const Mail = styled.img`
  transform: translateX(35px);
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
//Logo

export const Logo = styled.img`
  position: absolute;
  left: 0;
  width: 119px;
  height: 53px;

  @media screen and (max-width: 1000px) {
    position: relative;
    transform: translateY(-15px);
  }
`;

export const LinkList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

export const Link = styled.a`
  color: white;
  cursor: pointer;

  &:hover {
    color: rgba(36, 195, 255, 1);
  }
`;

//Copyright

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Name = styled.span`
  color: rgba(27, 146, 191, 1);
  font-weight: 600;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;
