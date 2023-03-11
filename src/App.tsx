import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { logoutAction } from './actions/logout';
import Main, { mainLoader } from './layouts/Main';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Main />, // v6.9 이전에 사용
    Component: Main, //? v6.9 이후로 사용가능
    loader: mainLoader,
    // errorElement: <Error />, // v6.9 이전에 사용
    ErrorBoundary: Error, //? v6.9 이후로 사용가능
    children: [
      {
        index: true,
        // element: <Dashboard />,
        Component: Dashboard,
        loader: dashboardLoader,
        action: dashboardAction,
        // errorElement: <Error />,
        ErrorBoundary: Error,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
