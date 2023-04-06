export function setItem<T>(key: string, data: T) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key: string) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  const item = localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
}

export function removeItem(key: string) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  localStorage.removeItem(key);
}
