import React from "react";
import styled, { css } from "styled-components";

const ToggleContainer = styled.label(
  (props) => css`
    position: relative;
    display: inline-block;
    width: 80px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input:checked + span:before {
      transform: translateX(46px);
    }
    input + span:after {
      position: absolute;
      content: "OFF";
      color: ${props.theme.textLight};
      font-weight: bold;
      font-size: 12px;
      top: 9px;
      right: 16px;
      z-index: -1;
    }
    input:checked + span:after {
      content: "ON";
      color: ${props.theme.textMedium};
      left: 14px;
    }
    input:checked + span {
      background-color: ${props.theme.bgLight};
    }

    input:focus + span {
      box-shadow: 0 0 1px ${props.theme.bgLight};
    }
  `
);

const ToggleSlider = styled.span(
  (props) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: ${props.theme.bgLight};
    transition: 0.4s;
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${props.theme.primary};
      border-radius: 50%;
      transition: 0.4s;
    }
  `
);

interface ToggleProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: boolean;
}

const Toggle = ({ onChange, value }: ToggleProps) => {
  return (
    <ToggleContainer>
      <input type="checkbox" onChange={onChange} checked={value} />
      <ToggleSlider />
    </ToggleContainer>
  );
};

export default Toggle;
