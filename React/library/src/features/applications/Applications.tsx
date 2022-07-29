import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Button from '../../components/Button/Button';
import Table from '../../components/Table';
import { getApplicationsAsync, selectApplications } from './applicationsSlice';

type IApplicationsProps = {};

const Applications = (props: IApplicationsProps) => {
  const applications = useAppSelector(selectApplications);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Applications:</h2>
      {applications.value.length > 0 ? (
        <Table
          tableData={applications.value}
          typeOfData={['number', 'string', 'string', 'string', 'string', 'string', 'date']}
          sort={true}
        />
      ) : (
        <Button
          label="Fetch Applications"
          color="primary"
          variant="contained"
          onClick={() => dispatch(getApplicationsAsync())}
        />
      )}
    </div>
  );
};

export default Applications;
