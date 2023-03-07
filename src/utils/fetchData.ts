export function fetchData(key: string) {
  return JSON.parse(localStorage.getItem(key) as any);
}
