import React from "react";
import styled, { css } from "styled-components";

const IconContainer = styled.span<{ fillColor?: string; strokeColor?: string }>(
  (props) => css`
    ${props.fillColor &&
    css`
      & svg {
        fill: ${props.fillColor};
      }
    `}
    ${props.strokeColor &&
    css`
      & svg {
        stroke: ${props.strokeColor};
      }
    `}
  `
);

type IIconProps = {
  children: React.ReactNode;
  fillColor?: string;
  strokeColor?: string;
};

const Icon = ({ children, fillColor, strokeColor }: IIconProps) => {
  return (
    <IconContainer fillColor={fillColor} strokeColor={strokeColor}>
      {children}
    </IconContainer>
  );
};

export default Icon;
