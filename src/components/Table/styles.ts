import { styled } from '@mui/material/styles';

import { ITableContainer, ITableCell, ITableHeaderCell } from './types';

export const ScrollContainer = styled('div')`
  overflow-x: auto;
  margin-bottom: 12px;
`;

export const TableContainer = styled('table')<ITableContainer>`
  border-spacing: 0;
  border-collapse: separate;
  ${({ width }) => width && `width: ${width};`}
  ${({ alignment }) =>
    alignment && `
      th,
      td {
        text-align: ${alignment};
      }
    `
  }
`;

export const TableHeader = styled('thead')(
  ({ theme }) => `
    font-size: 13px;
    background: ${theme.colors.primary};
    color: ${theme.text.textWhite};
  `
);

export const TableRow = styled('tr')<{ withLabels?: boolean }>(
  ({ withLabels, theme }) => `
    border-bottom: 1px solid ${theme.border.borderColorLight};
    height: 80px;
    & *:not(:first-of-type) {
      padding-left: 10px;
      padding-right: 10px;
    }
    & th,
    td:first-of-type {
      padding-left: 20px;
      padding-right: 20px;
    }
    ${withLabels &&
      `
      td:first-of-type {
        padding-left: 40px;
        padding-right: 40px;
      }
    `}
    &:last-child {
      td {
        border-bottom: none;
      }
    }
  `
);

export const TableHeaderCell = styled('th')<ITableHeaderCell>(
  ({ width, theme }) => `
    border-bottom: 2px solid ${theme.border.borderColorLight};
    text-transform: uppercase;
    text-align: left;
    padding: 9px 0px;
    white-space: nowrap;

    ${width && `width: ${width};`}

    div {
      display: flex;
      justify-content: start;
      align-items: center;
      cursor: pointer;

      span {
        display: flex;
      }
    }

    span {
      svg {
        visibility: hidden;
      }
    }

    &:hover {
      svg {
        visibility: visible;
        fill: ${theme.text.textWhite};
      }
    }

    svg {
      width: 12px;
      height: 12px;
      cursor: pointer;
      visibility: hidden;
      margin-left: 4px;
    }
  `
);

export const TableBody = styled('tbody')<{ bgColor?: string }>(
  ({ bgColor, theme }) => `
    background: ${bgColor ? bgColor : theme.bg.bgLight};
  `
);

export const TableCell = styled('td')<ITableCell>(
  ({ icon, labelIndicator, theme, width }) => `
    padding: 10px 0;
    border-bottom: 1px solid ${theme.border.borderColorLight};
    color: ${theme.text.textExtraDark};
    width: ${width};

    ${icon &&
      `
      text-align: right;
      svg {
        width: 12px;
        height: 12px;
        cursor: pointer;
        stroke: ${theme.colors.primary};
      }
    `}

    ${labelIndicator &&
      `
      font-weight: bold;
      font-size: 16px;
      color: ${theme.colors.primary};
    `}
  `
);
