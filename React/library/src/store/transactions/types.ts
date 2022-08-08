export interface IRepaymentDetails {
  repaymentDate: string;
  repaymentAmount: number;
  fees: number;
  directDebitDate: string;
  directDebitAmount: number;
  Status: string;
}

export interface ITransactionsState {
  value: IRepaymentDetails[];
  status: 'idle' | 'loading' | 'failed';
}
