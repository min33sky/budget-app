import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';
import { fetchData } from '../utils/localStorage';

export function dashboardLoader() {
  const username = fetchData('username');
  console.log('username', username);
  return { username };
}

export async function dashboardAction({ request }: { request: Request }) {
  console.log('대시보드 액션: ', request);
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
