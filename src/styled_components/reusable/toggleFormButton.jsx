import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ToggleContainer = styled.div`
  width: 100%;
  max-width: 666px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  border: solid 1px rgba(232, 234, 237, 1);
  background-color: rgba(242, 241, 242, 1);
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: transparent;
  z-index: 999;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(102, 107, 125, 1);
  transition: all 0.3s ease-in;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: white;
    `}
`;

const ActiveBackground = styled.div`
  background-color: rgba(36, 195, 255, 1);
  width: 49%; /* Match button width */
  height: 38px;
  border-radius: 8px;
  position: absolute;
  left: ${({ $activeType }) => ($activeType === "launch" ? "50%" : "1%")};
  transition: left 0.5s ease;
`;

export default function ToggleForm({ formType, setFormType }) {
  const handleFormChange = (type) => {
    setFormType(type);
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
