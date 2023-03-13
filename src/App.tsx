import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { deleteBudget } from './actions/deleteBudget';
import { logoutAction } from './actions/logout';
import Main, { mainLoader } from './layouts/Main';
import BudgetPage, { budgetAction, budgetLoader } from './pages/budget';
import DashboardPage, {
  dashboardLoader,
  dashboardAction,
} from './pages/dashboard';
import ErrorPage from './pages/error';
import ExpensesPage, { expensesAction, expensesLoader } from './pages/expenses';

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
        action: expensesAction,
        ErrorBoundary: ErrorPage,
      },
      {
        path: 'budget/:id',
        Component: BudgetPage,
        loader: budgetLoader,
        action: budgetAction,
        ErrorBoundary: ErrorPage,
        children: [
          {
            path: 'delete',
            action: deleteBudget,
          },
        ],
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
