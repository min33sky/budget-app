import { Expense } from '../types';
import { fetchData } from './localStorage';

/**
 * 해당 예산에 소비된 금액을 계산하는 함수
 * @param budgetId 예산 아이디
 */
export function calculateSpentByBudget(budgetId: string) {
  const expenses: Expense[] = fetchData('expenses') || [];

  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
}

export function formatPercentage(amt: number) {
  return amt.toLocaleString('ko-KR', {
    style: 'percent',
    minimumFractionDigits: 0,
  });
}

export function formatCurrency(amt: number) {
  return amt.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
}

export function formatDateToLocaleString(date: number) {
  // return new Date(date).toLocaleString('ko-KR');
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
