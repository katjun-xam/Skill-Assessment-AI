import { ReactChild, ReactChildren } from "react";
import styled, { css } from "styled-components";

const ButtonGroupContainer = styled.div<{ inline?: boolean; gap: number }>(
  (props) => css`
    display: flex;
    padding: 0;

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
};

const ButtonGroup = ({ children, inline, gap }: IButtonGroupProps) => {
  return (
    <ButtonGroupContainer inline={inline} gap={gap}>
      {children}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
