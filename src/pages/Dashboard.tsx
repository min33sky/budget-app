import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Intro from '../components/Intro';
import { delay } from '../utils/delay';
import {
  createBudget,
  createExpense,
  createUser,
  fetchData,
} from '../utils/localStorage';

export function dashboardLoader() {
  const username = fetchData('username');
  const budgets = fetchData('budgets');
  return { username, budgets };
}

export async function dashboardAction({ request }: { request: Request }) {
  await delay();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === 'newUser') {
    try {
      createUser(values.username.toString());
      return toast.success(`환영합니다. ${values.username}!`);
    } catch (error) {
      throw new Error(
        'There was a problem creating your account. Please try again.',
      );
    }
  } else if (_action === 'createBudget') {
    try {
      createBudget(values.newBudget, +values.newBudgetAmount);

      return toast.success(`예산 생성 완료!`);
    } catch (error: any) {
      throw new Error(
        'There was a problem creating your budget. Please try again.',
      );
    }
  } else if (_action === 'createExpense') {
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

export default function Dashboard() {
  const { username, budgets } = useLoaderData() as {
    username: string;
    budgets: any[];
  };

  return (
    <>
      {username ? (
        <div className="dashboard">
          <h1>
            환영합니다, <span className="accent">{username}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>

                <h2>기존 예산</h2>

                <div className="budgets">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>시작!!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
