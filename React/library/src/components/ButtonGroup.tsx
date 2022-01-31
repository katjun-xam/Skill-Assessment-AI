import { ReactChild, ReactChildren } from "react";
import styled, { css } from "styled-components";

const ButtonGroupContainer = styled.div<{
  inline?: boolean;
  gap: number;
  wide?: boolean;
}>(
  (props) => css`
    display: flex;
    padding: 0;
    ${props.wide &&
    css`
      flex: 1 0 auto;
    `}
    ${!props.inline
      ? css`
          flex-direction: column;
          & > *:not(:first-child) {
            margin-top: ${props.gap}px;
          }
        `
      : css`
          flex-direction: row;
          & > *:not(:first-child) {
            margin-left: ${props.gap}px;
          }
        `}
  `
);

type IButtonGroupProps = {
  children: ReactChild;
  inline?: boolean;
  gap: number;
  wide?: boolean;
};

const ButtonGroup = ({ children, inline, gap, wide }: IButtonGroupProps) => {
  return (
    <ButtonGroupContainer inline={inline} gap={gap} wide={wide}>
      {children}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
