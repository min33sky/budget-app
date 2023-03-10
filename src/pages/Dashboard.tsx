import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';
import { fetchData } from '../utils/localStorage';

export function dashboardLoader() {
  const username = fetchData('username');
  console.log('username', username);
  return { username };
}

export async function dashboardAction({ request }: { request: Request }) {
  const data = await request.formData();
  const formdata = Object.fromEntries(data);

  console.log('formdata', formdata, data);

  try {
    console.log('요시');
    return toast.success('Welcome back!');
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
        <div>
          <p>Welcome, {username}</p>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
