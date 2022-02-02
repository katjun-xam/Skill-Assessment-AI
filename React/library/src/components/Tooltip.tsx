import React, { ReactChild, useState } from "react";
import styled, { css } from "styled-components";

const TooltipContainer = styled.p(
  (props) => css`
    text-align: center;
    display: inline-block;
    position: relative;
  `
);

const TooltipBox = styled.div<{
  position?: "left" | "right" | "bottom";
  background?: string;
  width?: string;
  arrow?: boolean;
}>(
  (props) => css`
    width: ${props.width && props.width};
    overflow-wrap: break-word;
    & > div {
      background: ${props.background ? props.background : props.theme.bgDark};
    }
    position: absolute;
    z-index: 10;
    ${props.arrow &&
    css`
      ::after {
        content: "";
        position: absolute;
      }
    `}
    ${props.position === "left"
      ? css`
          top: 50%;
          right: 100%;
          padding-right: 5px;
          transform: translateY(-50%);
          &::after {
            border-left: 5px solid
              ${props.background ? props.background : props.theme.bgDark};
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 0px;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        `
      : props.position === "right"
      ? css`
          top: 50%;
          left: 100%;
          padding-left: 5px;
          transform: translateY(-50%);
          &::after {
            border-right: 5px solid
              ${props.background ? props.background : props.theme.bgDark};
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        `
      : props.position === "bottom"
      ? css`
          top: 100%;
          left: 50%;
          padding-top: 5px;
          transform: translateX(-50%);
          &::after {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid
              ${props.background ? props.background : props.theme.bgDark};
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        `
      : css`
          bottom: 100%;
          left: 50%;
          padding: 0 0 5px 0;
          transform: translateX(-50%);
          &::after {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid
              ${props.background ? props.background : props.theme.bgDark};
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
  `
);

const TooltipMessage = styled.div<{ fontColor?: string; fontSize?: string }>(
  (props) => css`
    border-radius: 3px;
    color: ${props.fontColor ? props.fontColor : props.theme.textWhite};
    font-size: ${props.fontSize && props.fontSize};
    padding: 5px 10px;
    text-align: center;
  `
);

const TooltipTarget = styled.div(
  (props) => css`
    display: inline-block;
  `
);

type ITooltipProps = {
  label: string;
  children: ReactChild;
  position?: "left" | "right" | "bottom";
  background?: string;
  width?: string;
  fontColor?: string;
  fontSize?: string;
  arrow?: boolean;
};

const Tooltip = ({
  position,
  label,
  children,
  background,
  width,
  fontSize,
  fontColor,
  arrow,
}: ITooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <TooltipContainer onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <TooltipBox
          position={position}
          background={background}
          width={width}
          arrow={arrow}
        >
          <TooltipMessage fontColor={fontColor} fontSize={fontSize}>
            {label}
          </TooltipMessage>
        </TooltipBox>
      )}
      <TooltipTarget onMouseEnter={() => setIsHovered(true)}>
        {children}
      </TooltipTarget>
    </TooltipContainer>
  );
};

export default Tooltip;
