import React from "react";
import styled, { css } from "styled-components";

const FormCellContainer = styled.div<{ cellWidth?: string }>(
  (props) => css`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    ${props.cellWidth !== "auto" &&
    css`
      flex: 0 0 ${props.cellWidth};
    `}
  `
);

type IFormCellProps = {
  children: React.ReactNode;
  cellWidth?: string;
};

const FormCell = ({ children, cellWidth }: IFormCellProps) => {
  return (
    <FormCellContainer cellWidth={cellWidth}>{children}</FormCellContainer>
  );
};

FormCell.defaultProps = {
  cellWidth: "auto",
};
export default FormCell;
