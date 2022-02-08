import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button<{
  color: string;
  variant?: string;
  disabled: boolean;
  wide: boolean;
  centered?: boolean;
}>(
  (props) => css`
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    min-height: ${props.theme.btHeight};
    display: flex;
    align-items: center;
    user-select: none;

    &:hover {
      text-decoration: underline;
    }
    & svg {
      display: block;
    }

    ${props.color === "primary" &&
    css`
      color: ${props.theme.primary};
      &:hover {
        color: ${props.theme.primaryAccent};
      }
    `};
    ${props.color === "secondary" &&
    css`
      color: ${props.theme.secondary};
      &:hover {
        color: ${props.theme.secondaryAccent};
      }
    `};

    ${props.variant === "contained" &&
    css`
      border-radius: ${props.theme.borderRadiusMd};
      padding: ${props.theme.btPadding};
      ${props.color === "primary" &&
      css`
        background-color: ${props.theme.primary};
        color: ${props.theme.textWhite};
        border: ${`2px solid ${props.theme.primary}`};
        &:hover {
          background-color: ${props.theme.primaryAccent};
          border: ${`2px solid ${props.theme.primaryAccent}`};
          color: ${props.theme.textLight};
        }
      `};
      ${props.color === "secondary" &&
      css`
        background-color: ${props.theme.secondary};
        color: ${props.theme.textWhite};
        border: ${`2px solid ${props.theme.secondary}`};
        &:hover {
          background-color: ${props.theme.secondaryAccent};
          border: ${`2px solid ${props.theme.secondaryAccent}`};
          color: ${props.theme.textLight};
        }
      `};
      &:hover {
        text-decoration: none;
      }
    `};

    ${props.variant === "outlined" &&
    css`
      box-sizing: border-box;
      padding: ${props.theme.btPadding};
      border-radius: ${props.theme.borderRadiusMd};
      ${props.color === "primary" &&
      css`
        border: ${`2px solid ${props.theme.primary}`};
        &:hover {
          border-color: transparent;
          color: ${props.theme.textExtraLight};
          background-color: ${props.theme.primaryAccent};
          & svg {
            fill: ${props.theme.textWhite};
          }
        }
      `};
      ${props.color === "secondary" &&
      css`
        border: ${`2px solid ${props.theme.secondary}`};
        &:hover {
          border-color: transparent;
          color: ${props.theme.textExtraLight};
          background-color: ${props.theme.secondaryAccent};
          & svg {
            fill: ${props.theme.textWhite};
          }
        }
      `};
      &:hover {
        text-decoration: none;
      }
    `};

    ${props.disabled &&
    css`
      pointer-events: none;
      cursor: default;
      ${props.variant === "contained" &&
      css`
        border-color: transparent;
        color: ${props.theme.textMedium};
        background-color: ${props.theme.disabled};
      `}

      ${props.variant === "outlined" &&
      css`
        box-sizing: border-box;
        border: ${`2px solid ${props.theme.disabled}`};
        background-color: ${props.theme.bgWhite};
        color: ${props.theme.disabled};
      `};
    `}

    ${props.wide &&
    css`
      width: 100%;
    `}

    ${props.centered &&
    css`
      justify-content: center;
    `}
  `
);

const StartIconContainer = styled.div`
  margin-right: 10px;
`;
const EndIconContainer = styled.div`
  margin-left: 10px;
`;
const HeadIconContainer = styled.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-left: 8px;
`;

interface IButtonProps {
  color: "primary" | "secondary";
  label?: string;
  variant?: "contained" | "outlined";
  disabled?: boolean;
  wide?: boolean;
  centered?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  headIcon?: ReactNode;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  color,
  label,
  variant,
  disabled = false,
  tabIndex,
  wide = false,
  centered,
  startIcon,
  endIcon,
  headIcon,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      wide={wide}
      centered={centered}
      tabIndex={disabled ? -1 : tabIndex}
    >
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      <span>{label}</span>
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
      {headIcon && <HeadIconContainer>{headIcon}</HeadIconContainer>}
    </ButtonContainer>
  );
};

export default Button;
