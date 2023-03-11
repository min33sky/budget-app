import { useLoaderData } from 'react-router-dom';
import Table from '../components/Table';
import { Expense } from '../types';
import { fetchData } from '../utils/localStorage';

export function expensesLoader() {
  const expenses = fetchData('expenses');
  return {
    expenses,
  };
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
