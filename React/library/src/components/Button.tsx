import React from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button<{ variant: string }>(
  (props) => css`
    color: ${props.theme.textWhite};
    ${props.variant === "primary" &&
    css`
      background-color: ${props.theme.primary};
      border-color: transparent;
      &:hover {
        background-color: ${props.theme.primaryAccent};
        color: ${props.theme.textLight};
      }
    `};
    ${props.variant === "secondary" &&
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
    border-radius: ${props.theme.borderRadiusMd};
    padding: ${props.theme.btPadding};
    cursor: pointer;
  `
);

interface IButtonProps {
  variant: string;
}

const Button = ({ variant }: IButtonProps) => {
  return <ButtonContainer variant={variant}>Button</ButtonContainer>;
};

export default Button;
