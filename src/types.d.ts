export interface Expense {
  id: string;
  name: string;
  createdAt: number;
  amount: number;
  budgetId: string;
}

export interface Budget {
  id: string;
  name: string;
  createdAt: number;
  amount: number;
  color: string;
}

export type FetchKeys = 'username' | 'budgets' | 'expenses';
export type ActionType = 'newUser' | 'createBudget' | 'createExpense';
