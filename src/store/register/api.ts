import { repaymentDetails } from 'assets/data/tableData';
import { IRepaymentDetails } from 'store/transactions/types';

export function fetchTransactions(quantity = 800) {
  return new Promise<{ data: IRepaymentDetails[] }>((resolve) =>
    setTimeout(() => resolve({ data: repaymentDetails }), quantity),
  );
}
