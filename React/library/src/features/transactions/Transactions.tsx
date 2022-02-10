import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import {
  getTransactions,
  getTransactionsAsync,
  selectTransactions,
} from "./transactionsSlice";

type ITransactionsProps = {};

const Transactions = (props: ITransactionsProps) => {
  const transactions = useAppSelector(selectTransactions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("transactions", transactions);
  }, [transactions]);

  return (
    <div>
      <h2>Transactions:</h2>
      {transactions.value.map((transaction, index) => (
        <div key={index}>{transaction.repaymentAmount}</div>
      ))}
      <Button
        label="Fetch transactions"
        color="primary"
        variant="contained"
        onClick={() => dispatch(getTransactionsAsync(100))}
      />
    </div>
  );
};

export default Transactions;
