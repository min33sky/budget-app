export function fetchData(key: string) {
  return JSON.parse(localStorage.getItem(key) as any);
}

export function createUser(username: string | FormDataEntryValue) {
  localStorage.setItem('username', JSON.stringify(username));
}

export function deleteItem(key: string) {
  localStorage.removeItem(key);
}
