import { IIdentity } from "../../models";

export function fetchUser(pName: string) {
  return new Promise<{ data: IIdentity }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            displayName: pName,
            title: "Mr",
            firstName: pName.substring(0, 3),
            lastName: pName.substring(3, 6),
            dateOfBirth: "2021-09-13T00:00:00.000Z",
          },
        }),
      800
    )
  );
}
