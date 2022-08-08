export function isValidArray(array: any): array is Array<any> {
  return Array.isArray(array);
}

export function isNotEmptyArray(array: any): array is Array<any> {
  return Array.isArray(array) && !!array.length;
}

export const isNotLast = (arr: Array<any>, index: number): boolean => index !== arr.length - 1;
