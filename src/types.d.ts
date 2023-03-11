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
