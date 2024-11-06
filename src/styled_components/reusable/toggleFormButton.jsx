import React from "react";
import styled, { css } from "styled-components";
import { PlusJakartaSans } from "../shared_styles";

//Redux
import { useDispatch } from "react-redux";
import {
  resetErrorState,
  setForm,
} from "../../redux/reducers/waiting_list_form";

const ToggleContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  border: solid 1px rgba(232, 234, 237, 1);
  background-color: rgba(242, 241, 242, 1);
  border-radius: 8px;
  z-index: 10;
`;

const Button = styled.button`
  ${PlusJakartaSans};
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: transparent;
  z-index: 999;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: rgba(102, 107, 125, 1);
  transition: color 0.3s ease-in;

  &:hover {
    color: black;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: white;
      &:hover {
        color: white;
      }
    `}

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ActiveBackground = styled.div`
  background-color: rgba(36, 195, 255, 1);
  width: 49%;
  height: 38px;
  border-radius: 8px;
  position: absolute;
  left: ${({ $activeType }) => ($activeType === "launch" ? "50%" : "1%")};
  transition: left 0.5s ease;
`;

export default function ToggleForm({ formType }) {
  const dispatch = useDispatch();
  const handleFormChange = (type) => {
    dispatch(setForm(type));
    dispatch(resetErrorState());
  };

  return (
    <ToggleContainer>
      <Button
        $isActive={formType === "itramei"}
        onClick={() => handleFormChange("itramei")}
      >
        Itramei Waitlist
      </Button>
      <Button
        $isActive={formType === "launch"}
        onClick={() => handleFormChange("launch")}
      >
        Launch Event Waitlist
      </Button>
      <ActiveBackground $activeType={formType} />
    </ToggleContainer>
  );
}
