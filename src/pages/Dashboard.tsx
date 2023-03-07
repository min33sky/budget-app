import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';

export function dashboardLoader() {
  const username = fetchData('username');
  return { username };
}

export default function Dashboard() {
  const { username } = useLoaderData() as { username: string };
  console.log('username', username);

  return (
    <div>
      <h1>{username}</h1>
      Dashboard
    </div>
  );
}
