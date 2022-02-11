import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import Table from "../../components/Table";
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
      {transactions.value.length > 0 ? (
        <Table
          tableData={transactions.value}
          typeOfData={["date", "amount", "amount", "date", "amount", "string"]}
        />
      ) : (
        <Button
          label="Fetch transactions"
          color="primary"
          variant="contained"
          onClick={() => dispatch(getTransactionsAsync(100))}
        />
      )}
    </div>
  );
};

export default Transactions;
