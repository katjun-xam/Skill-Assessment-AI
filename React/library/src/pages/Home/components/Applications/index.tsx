import { useAppSelector, useAppDispatch } from 'store';
import { getApplicationsAsync, selectApplications } from 'store/applications/slice';
import { ApplicationsWrapper } from './styles';
import { Spinner, Table, Button, ElseIf, If } from 'components';

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
            <Spinner />
          </ElseIf>
          <ElseIf condition={hasApplications && status === 'idle'}>
            <Table
              tableData={applications}
              typeOfData={['number', 'string', 'string', 'string', 'string', 'string', 'date']}
              sort={true}
            />
          </ElseIf>
        </If>
        <Button
          label={hasApplications ? 'Refetch applications' : 'Fetch applications'}
          color="primary"
          variant="contained"
          onClick={handleFetchApplications}
          disabled={status === 'loading'}
        />
      </div>
    </ApplicationsWrapper>
  );
};

export default Applications;
