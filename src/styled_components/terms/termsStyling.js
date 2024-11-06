import styled from "styled-components";
import { PlusJakartaSans, Sansation } from "../shared_styles";

//Containers
export const ModalContainer = styled.div`
  ${PlusJakartaSans};
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  gap: 40px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

//Text Components
export const Title = styled.h1`
  ${Sansation};
  font-size: 40px;
  font-weight: 600;
`;

export const SubHeader = styled.div`
  margin-top: 14px;
  font-weight: 600;
`;

export const Text = styled.p`
  width: 70%;
  text-align: center;
  margin-top: 48px;
`;

//Extra
export const Blue = styled.span`
  color: rgba(27, 146, 191, 1);
`;

export const Icon = styled.i`
  position: absolute;
  right: 0;
  top: -40px;
  font-size: 24px;
  cursor: pointer;
`;