import React from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { selectTransactions } from 'store/transactions/slice';
import { getTransactionsAsync } from 'store/transactions/actions';
import { TransactionsWrapper } from './styles';
import { SkeletonLoading, Table, Button, ElseIf, If } from 'components';

const Transactions: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { value: transactions, status } = useAppSelector(selectTransactions);
  const hasTransactions = transactions.length > 0;

  const handleFetchTransactions = (): void => {
    dispatch(getTransactionsAsync(800));
  };

  return (
    <TransactionsWrapper>
      <h2 className="transactionTitle">Fetching Mock Transactions Data</h2>
      <div className="content">
        <If condition={!hasTransactions && status === 'idle'}>
          <span className="guidanceText">Click the button below to fetch the applications table.</span>
          <ElseIf condition={status === 'loading'}>
            <SkeletonLoading />
          </ElseIf>
          <ElseIf condition={hasTransactions && status === 'idle'}>
            <Table
              tableData={transactions}
              typeOfData={['date', 'amount', 'amount', 'date', 'amount', 'string']}
              sort={true}
            />
          </ElseIf>
        </If>
        <Button
          label={hasTransactions ? 'Refetch transactions' : 'Fetch transactions'}
          color="primary"
          variant="contained"
          onClick={handleFetchTransactions}
          disabled={status === 'loading'}
        />
      </div>
    </TransactionsWrapper>
  );
};

export default Transactions;
