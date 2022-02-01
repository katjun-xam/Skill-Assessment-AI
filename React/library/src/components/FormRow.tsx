import styled, { css } from "styled-components";

const FormRow = styled.div<{ width?: string }>(
  (props) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }

    @media all and (min-width: ${props.theme.breakpoints.md}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > *:not(:last-child) {
        margin-bottom: 0;
      }
    }
  `
);

export default FormRow;
