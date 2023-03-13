import { FetchKeys } from '../types';
import { generateRandomColor } from './generateRandomColor';

/**
 * 로컬스토리지에서 데이터를 가져오는 함수
 * @param key 로컬 스토리지의 키값
 */
export function fetchData(key: FetchKeys) {
  return JSON.parse(localStorage.getItem(key) ?? '[]');
}

export function createUser(username: string) {
  localStorage.setItem('username', JSON.stringify(username));
}

/**
 * 예산 생성 함수
 * @param name 예산 이름
 * @param amount 금액
 */
export function createBudget(name: string, amount: number) {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(fetchData('budgets')?.length),
  };

  const existingBudgets = fetchData('budgets') ?? [];

  localStorage.setItem(
    'budgets',
    JSON.stringify([...existingBudgets, newItem]),
  );
}

export function createExpense({
  amount,
  budgetId,
  name,
}: {
  name: string;
  amount: number;
  budgetId: string;
}) {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount,
    budgetId,
  };

  const existingExpenses = fetchData('expenses') ?? [];

  return localStorage.setItem(
    'expenses',
    JSON.stringify([...existingExpenses, newItem]),
  );
}

/**
 * 로컬스토리지의 데이터 삭제
 * - 아이디가 있으면 해당 아이템만 삭제
 * - 아이디가 없으면 해당 키값의 데이터 전체 삭제
 * @param key 삭제할 키값
 * @param id 삭제할 아이템의 id
 */
export function deleteItem(key: FetchKeys, id?: string) {
  const existingItems = fetchData(key) ?? [];

  if (id) {
    const filteredItems = existingItems.filter((item: any) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(filteredItems));
  }

  localStorage.removeItem(key);
}

/**
 * 매칭되는 아이템을 모두 가져오는 함수
 */
export function getAllMatchingItems({
  category,
  key,
  value,
}: {
  category: FetchKeys;
  key: string;
  value: any;
}) {
  const existingItems = fetchData(category) ?? [];

  return existingItems.filter((item: any) => item[key] === value);
}
