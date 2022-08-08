export interface IApplications {
  id: number;
  applicationName: string;
  applicationStatus: string;
  currentRepaymentFrequency: string;
  currentRegularPayment: string;
  currentRegularFees: string;
  lastPaymentDate: string;
}

export interface IApplicationsState {
  value: IApplications[];
  status: 'idle' | 'loading' | 'failed';
}
