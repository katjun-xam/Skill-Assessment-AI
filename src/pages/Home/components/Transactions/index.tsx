import React from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { selectTransactions } from 'store/transactions/slice';
import { getTransactionsAsync } from 'store/transactions/actions';
import { transactionsColumns } from './constants';
import { StyledButton, TransactionsWrapper } from './styles';
import { SkeletonLoading, ElseIf, If } from 'components';

import { DataGrid } from '@mui/x-data-grid';

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
            <DataGrid
              rows={transactions}
              columns={transactionsColumns}
              rowCount={transactions.length}
              autoHeight
              sx={{ marginBottom: '20px' }}
            />
          </ElseIf>
        </If>
        <StyledButton
          size="large"
          variant="contained"
          onClick={handleFetchTransactions}
          disabled={status === 'loading'}
          disableElevation
        >
          {hasTransactions ? 'Refetch transactions' : 'Fetch transactions'}
        </StyledButton>
      </div>
    </TransactionsWrapper>
  );
};

export default Transactions;
