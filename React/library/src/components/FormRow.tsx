import styled, { css } from "styled-components";

const FormRow = styled.div<{ width?: string }>(
  (props) => css`
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    /* ${props.width &&
    css`
      & :first-child {
        flex: 1 0 ${props.width}%;
      }
    `} */
  `
);

export default FormRow;
