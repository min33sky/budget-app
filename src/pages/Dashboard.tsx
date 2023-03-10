import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import AddBudgetForm from '../components/AddBudgetForm';
import Intro from '../components/Intro';
import { createUser, fetchData } from '../utils/localStorage';

export function dashboardLoader() {
  const username = fetchData('username');
  const budgets = fetchData('budgets');
  return { username, budgets };
}

export async function dashboardAction({ request }: { request: Request }) {
  const data = await request.formData();
  const formdata = Object.fromEntries(data);

  console.log('폼데이터: ', formdata);

  const { username } = formdata;

  try {
    createUser(username);
    return toast.success(`Welcome ${username}!`);
  } catch (error) {
    throw new Error(
      'There was a problem creating your account. Please try again.',
    );
  }
}

export default function Dashboard() {
  const { username } = useLoaderData() as { username: string };
  console.log('username', username);

  return (
    <>
      {username ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{username}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
