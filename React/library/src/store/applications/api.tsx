import { applications } from 'assets/data/tableData';
import { IApplications } from './types';

export function fetchApplications() {
  return new Promise<{ data: IApplications[] }>((resolve) => setTimeout(() => resolve({ data: applications }), 800));
}
