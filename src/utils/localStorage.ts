export function fetchData(key: string) {
  return JSON.parse(localStorage.getItem(key) as any);
}

export function deleteItem(key: string) {
  localStorage.removeItem(key);
}
