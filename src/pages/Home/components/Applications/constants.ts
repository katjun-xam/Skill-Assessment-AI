import { GridColDef } from "@mui/x-data-grid";
import { handleRenderCellCurrency, handleRenderCellDate } from "utils/helpers/gridFormatters";

export const applicationsColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'applicationName', headerName: 'Application Name', flex: 1, disableColumnMenu: true },
  { field: 'applicationStatus', headerName: 'Application Status', flex: 1, disableColumnMenu: true },
  { field: 'currentRepaymentFrequency', headerName: 'Current Repayment Frequency', flex: 1, disableColumnMenu: true },
  { field: 'currentRegularPayment', headerName: 'Current Regular Payment', renderCell: handleRenderCellCurrency, flex: 1, disableColumnMenu: true },
  { field: 'currentRegularFees', headerName: 'Current Regular Fees', renderCell: handleRenderCellCurrency, flex: 1, disableColumnMenu: true },
  { field: 'lastPaymentDate', headerName: 'Last Payment Date', renderCell: handleRenderCellDate, flex: 1, disableColumnMenu: true },
];
