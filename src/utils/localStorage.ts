import { FetchKeys } from '../types';
import { generateRandomColor } from './generateRandomColor';

/**
 * 로컬스토리지에서 데이터를 가져오는 함수
 * @param key 로컬 스토리지의 키값
 */
export function fetchData(key: FetchKeys) {
  return JSON.parse(localStorage.getItem(key) as any);
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

export function deleteItem(key: FetchKeys) {
  localStorage.removeItem(key);
}
