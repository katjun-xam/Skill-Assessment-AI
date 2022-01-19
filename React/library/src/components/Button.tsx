import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button<{
  variant: string;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>(
  (props) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props.theme.textWhite};
    border-radius: ${props.theme.borderRadiusMd};
    padding: ${props.theme.btPadding};
    cursor: pointer;
    ${props.variant === "primary" &&
    css`
      background-color: ${props.theme.primary};
      border-color: transparent;
      &:hover {
        background-color: ${props.theme.primaryAccent};
        color: ${props.theme.textLight};
      }
      & svg {
        fill: ${props.theme.textWhite};
        path {
          fill: ${props.theme.textWhite};
        }
      }
    `};
    ${props.variant === "secondary" &&
    css`
      background-color: ${props.theme.secondary};
      border-color: transparent;
      &:hover {
        background-color: ${props.theme.secondaryAccent};
        color: ${props.theme.textLight};
      }
    `};
    ${props.variant === "disabled" &&
    css`
      border-color: transparent;
      color: ${props.theme.textMedium};
      background-color: ${props.theme.disabled};
      pointer-events: none;
      cursor: default;
    `}
    ${props.variant === "outlinePrimary" &&
    css`
      box-sizing: border-box;
      border: ${`2px solid ${props.theme.primary}`};
      background-color: ${props.theme.bgWhite};
      color: ${props.theme.primary};
      &:hover {
        border: ${`2px solid ${props.theme.primary}`};
        color: ${props.theme.textExtraLight};
        background-color: ${props.theme.primary};
      }
    `};
    ${props.variant === "outlineSecondary" &&
    css`
      box-sizing: border-box;
      border: ${`2px solid ${props.theme.secondary}`};
      background-color: ${props.theme.bgWhite};
      color: ${props.theme.secondary};
      &:hover {
        border: ${`2px solid ${props.theme.secondary}`};
        color: ${props.theme.textExtraLight};
        background-color: ${props.theme.secondary};
      }
    `};
    ${props.variant === "outlineDisabled" &&
    css`
      box-sizing: border-box;
      border: ${`2px solid ${props.theme.disabled}`};
      background-color: ${props.theme.bgWhite};
      color: ${props.theme.disabled};
      pointer-events: none;
      cursor: default;
    `};
    & span {
      transform: ${props.hasStartIcon
        ? `translateX(20px);`
        : props.hasEndIcon
        ? `translateX(-20px);`
        : ``};
    }
  `
);

const StartIconContainer = styled.div`
  position: absolute;
  left: 10px;
`;
const EndIconContainer = styled.div`
  position: absolute;
  right: 10px;
`;

interface IButtonProps {
  variant: string;
  startIcon: ReactNode;
  endIcon: ReactNode;
  label: string;
  tabIndex?: number;
  onClick?: () => void;
}

const Button = ({
  variant,
  startIcon,
  endIcon,
  label,
  tabIndex,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      hasStartIcon={Boolean(startIcon)}
      hasEndIcon={Boolean(endIcon)}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      <span>{label}</span>
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </ButtonContainer>
  );
};

export default Button;
