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

export function formatPercentage(amount: number) {
  return amount.toLocaleString('ko-KR', {
    style: 'percent',
    minimumFractionDigits: 0,
  });
}

export function formatCurrency(amount: number) {
  return amount.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
}

export function formatDateToLocaleString(date: number) {
  // return new Date(date).toLocaleString('ko-KR', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });
  return new Intl.DateTimeFormat('ko-KR', {
    year: '2-digit',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Seoul',
  }).format(date);
}
