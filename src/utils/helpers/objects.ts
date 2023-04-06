export function isEmptyObject<T = object>(obj: T): boolean {
  return !(obj && Object.keys(obj).length > 0);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function sortObject(obj: any) {
  const sorted: any = {};

  Object.keys(obj)
    .sort()
    .forEach((key: string) => {
      sorted[key] = obj[key];
    });

  return sorted;
}

export function stringifyObject(obj: object) {
  return JSON.stringify(sortObject(obj));
}

export const has = Function.call.bind(Object.hasOwnProperty);

/* eslint-disable @typescript-eslint/no-explicit-any */
export function get(object: any, path?: string, defaultValue?: any) {
  if (!path) return defaultValue;

  const paths = path
    .replace(/\[|\]/g, '.')
    .split('.')
    .filter((x) => x);
  let part: string | undefined = '';
  let actual = object;

  while ((part = paths.shift())) {
    if (has(actual || {}, part)) {
      actual = actual[part];
    } else {
      return defaultValue;
    }
  }

  return actual;
}

export function hasAtLeastOneValue(obj: object) {
  return Object.values(obj).some((v) => v !== null && v !== '' && v !== undefined);
}

export function isAllKeysHaveValue(obj: object) {
  return !isEmptyObject(obj) && Object.values(obj).every((v) => v !== null && v !== '' && v !== undefined);
}
