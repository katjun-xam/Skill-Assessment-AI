import { IIdentity } from './types';

export const fetchUser = () => {
  return new Promise<{ data: IIdentity }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            title: 'Mr',
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '2021-09-13T00:00:00.000Z',
          },
        }),
      800,
    ),
  );
};
