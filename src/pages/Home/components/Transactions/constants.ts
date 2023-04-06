import { GridColDef } from "@mui/x-data-grid";
import { handleRenderCellCurrency, handleRenderCellDate } from "utils/helpers/gridFormatters";

export const transactionsColumns: GridColDef[] = [
  { field: 'repaymentDate', headerName: 'Repayment Date', renderCell: handleRenderCellDate, flex: 1, disableColumnMenu: true },
  { field: 'repaymentAmount', headerName: 'Repayment Amount', renderCell: handleRenderCellCurrency, flex: 1, disableColumnMenu: true },
  { field: 'fees', headerName: 'Fees', renderCell: handleRenderCellCurrency, flex: 1, disableColumnMenu: true },
  { field: 'directDebitDate', headerName: 'Direct Debit Date', renderCell: handleRenderCellDate, flex: 1, disableColumnMenu: true },
  { field: 'directDebitAmount', headerName: 'Direct Debit Amount', renderCell: handleRenderCellCurrency, flex: 1, disableColumnMenu: true },
  { field: 'Status', headerName: 'Status', flex: 1 }
];
