/**
 * 로컬스토리지에서 데이터를 가져오는 함수
 * @param key 로컬 스토리지의 키값
 */
export function fetchData(key: string) {
  return JSON.parse(localStorage.getItem(key) as any);
}

export function createUser(username: string | FormDataEntryValue) {
  localStorage.setItem('username', JSON.stringify(username));
}

export function deleteItem(key: string) {
  localStorage.removeItem(key);
}
