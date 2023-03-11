import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { logoutAction } from './actions/logout';
import Main, { mainLoader } from './layouts/Main';
import DashboardPage, {
  dashboardLoader,
  dashboardAction,
} from './pages/Dashboard';
import ErrorPage from './pages/Error';
import ExpensesPage, { expensesLoader } from './pages/Expenses';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Main />, // v6.9 이전에 사용
    Component: Main, //? v6.9 이후로 사용가능
    loader: mainLoader,
    // errorElement: <Error />, // v6.9 이전에 사용
    ErrorBoundary: ErrorPage, //? v6.9 이후로 사용가능
    children: [
      {
        index: true,
        // element: <Dashboard />,
        Component: DashboardPage,
        loader: dashboardLoader,
        action: dashboardAction,
        // errorElement: <Error />,
        ErrorBoundary: ErrorPage,
      },
      {
        path: 'expenses',
        Component: ExpensesPage,
        loader: expensesLoader,
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
