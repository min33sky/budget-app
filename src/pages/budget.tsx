import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Table from '../components/Table';
import { ActionType, Budget, Expense } from '../types';
import { createExpense, getAllMatchingItems } from '../utils/localStorage';

export async function budgetLoader({ params }: { params: any }) {
  console.log('budgetLoader', params);

  const budget = await getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    category: 'expenses',
    key: 'budgetId',
    value: params.id,
  });

  if (!budget) {
    throw new Error('The budget you’re trying to find doesn’t exist');
  }

  return { budget, expenses };
}

export async function budgetAction({ request }: { request: Request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data) as {
    _action: ActionType;
    [key: string]: string;
  };

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense.toString(),
        amount: +values.newExpenseAmount.toString(),
        budgetId: values.newExpenseBudget.toString(),
      });
      return toast.success(`${values.newExpense} 지출 추가!`);
    } catch (error: any) {
      throw new Error(
        'There was a problem creating your expense. Please try again.',
      );
    }
  }
}

export default function BudgetPage() {
  const { budget, expenses } = useLoaderData() as {
    budget: Budget;
    expenses: Expense[];
  };

  return (
    <div
      className="grid-lg"
      style={
        {
          '--accent': budget.color,
        } as any
      }
    >
      <h1 className="h2">
        <span className="accent">{budget.name}</span> 개요
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> 지출내역
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
}
