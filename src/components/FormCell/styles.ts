import { styled } from '@mui/material/styles';

import { IFormCellProps } from "./types";

export const FormCellContainer = styled('div')<Pick<IFormCellProps, 'cellWidth'>>(
  ({ cellWidth }) => `
    display: flex;
    align-items: center;
    ${cellWidth === "auto" ? "flex: 1 0 auto;" : `flex: 0 0 ${cellWidth};`}
  `
);