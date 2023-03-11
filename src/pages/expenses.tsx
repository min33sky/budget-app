import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Table from '../components/Table';
import { ActionType, Expense } from '../types';
import { delay } from '../utils/delay';
import { deleteItem, fetchData } from '../utils/localStorage';

export async function expensesLoader() {
  const expenses = fetchData('expenses');
  return {
    expenses,
  };
}

export async function expensesAction({ request }: { request: Request }) {
  await delay();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data) as {
    _action: ActionType;
    [key: string]: string;
  };

  if (_action === 'deleteExpense') {
    try {
      deleteItem('expenses', values.expenseId);
      return toast.success(`지출 삭제 완료!`);
    } catch (error: any) {
      throw new Error(
        'There was a problem deleting your expense. Please try again.',
      );
    }
  }
}

export default function ExpensesPage() {
  const { expenses } = useLoaderData() as {
    expenses: Expense[];
  };

  return (
    <div className="grid-lg">
      <h1>총 지출 내역</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            최근 지출 내역 <small>{expenses.length}개</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <>
          <p>지출 내역이 없어요...</p>
        </>
      )}
    </div>
  );
}
