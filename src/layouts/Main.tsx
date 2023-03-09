import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';
import wave from '../assets/wave.svg';
import { fetchData } from '../utils/localStorage';

export function mainLoader() {
  const username = fetchData('username');
  return { username };
}

export default function Main() {
  const { username } = useLoaderData() as { username: string };

  return (
    <div className="layout">
      <Nav username={username} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}
