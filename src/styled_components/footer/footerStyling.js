import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: rgba(41, 58, 75, 1);
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  color: white;
`;

export const Row = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

//Contact

export const FooterTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EmailList = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Text = styled.p`
  font-weight: 400;
  ${({ $title }) =>
    $title &&
    css`
      font-size: 32px;
      font-weight: 700;
    `}
`;

export const Mail = styled.img`
  transform: translateX(35px);
`;
//Logo

export const Logo = styled.img`
  position: absolute;
  left: 0;
  width: 119px;
  height: 53px;
`;

export const LinkList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Link = styled.a`
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

//Copyright

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Name = styled.span`
  color: rgba(27, 146, 191, 1);
  font-weight: 600;
`;
