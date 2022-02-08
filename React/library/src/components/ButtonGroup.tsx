import { ReactChild, ReactChildren } from "react";
import styled, { css } from "styled-components";

const ButtonGroupContainer = styled.div<{
  gap: number;
  inline?: boolean;
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
          flex-direction: column;
          & > *:not(:first-child) {
            margin-top: ${props.gap}px;
          }
          @media all and (min-width: ${props.theme.breakpoints.sm}) {
            flex-direction: row;
            & > *:not(:first-child) {
              margin-top: 0;
              margin-left: ${props.gap}px;
            }
          }
        `}
  `
);

type IButtonGroupProps = {
  children: ReactChild;
  gap: number;
  inline?: boolean;
  wide?: boolean;
};

const ButtonGroup = ({ children, gap, inline, wide }: IButtonGroupProps) => {
  return (
    <ButtonGroupContainer inline={inline} gap={gap} wide={wide}>
      {children}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
