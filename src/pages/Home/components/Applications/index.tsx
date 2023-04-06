import { useAppSelector, useAppDispatch } from 'store';
import { getApplicationsAsync, selectApplications } from 'store/applications/slice';
import { applicationsColumns } from './constants';
import { ApplicationsWrapper, StyledButton } from './styles';
import { ElseIf, If } from 'components';

import { CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Applications = () => {
  const dispatch = useAppDispatch();
  const { value: applications, status } = useAppSelector(selectApplications);
  const hasApplications = applications.length > 0;

  const handleFetchApplications = (): void => {
    dispatch(getApplicationsAsync());
  };

  return (
    <ApplicationsWrapper>
      <h2 className="applicationTitle">Fetching Mock Applications Data</h2>
      <div className="content">
        <If condition={!hasApplications && status === 'idle'}>
          <span className="guidanceText">Click the button below to fetch the applications table.</span>
          <ElseIf condition={status === 'loading'}>
            <CircularProgress sx={{ display: 'block', width: '100%', marginBottom: '20px' }} />
          </ElseIf>
          <ElseIf condition={hasApplications && status === 'idle'}>
            <DataGrid
              rows={applications}
              columns={applicationsColumns}
              rowCount={applications.length}
              autoHeight
              sx={{ marginBottom: '20px' }}
            />
          </ElseIf>
        </If>
        <StyledButton
          size="large"
          variant="contained"
          onClick={handleFetchApplications}
          disabled={status === 'loading'}
          disableElevation
        >
          {hasApplications ? 'Refetch applications' : 'Fetch applications'}
        </StyledButton>
      </div>
    </ApplicationsWrapper>
  );
};

export default Applications;
