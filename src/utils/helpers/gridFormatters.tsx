import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export const StyledCellContent = styled(Typography)`
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const handleRenderCellDate = (params: GridRenderCellParams) => {
  const date =
    new Date(params?.value).getDate().toString() +
    '/' +
    new Date(params?.value).getMonth().toString() +
    '/' +
    new Date(params?.value).getFullYear().toString();
  const cellValue = params?.value ? date : '';

  return <StyledCellContent id={`styled-content-${params.id}-${params.field}`}>{cellValue}</StyledCellContent>;
};

export const handleRenderCellCurrency = (params: GridRenderCellParams) => {
  const currency = '$' + params?.value;
  const cellValue = params?.value ? currency : '';

  return <StyledCellContent id={`styled-content-${params.id}-${params.field}`}>{cellValue}</StyledCellContent>;
};
