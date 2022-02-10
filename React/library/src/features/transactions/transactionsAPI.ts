import { repaymentDetails } from "./../../assets/data/tableData";
import { IRepaymentDetails } from "./../../models";
export function fetchTransactions(quantity = 10) {
  console.log("calling fetchTransactions!");
  return new Promise<{ data: IRepaymentDetails[] }>((resolve) =>
    setTimeout(() => resolve({ data: repaymentDetails }), 800)
  );
}
