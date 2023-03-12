import { TrashIcon } from '@heroicons/react/24/outline';
import { Link, useFetcher } from 'react-router-dom';
import { Expense } from '../types';
import { formatCurrency, formatDateToLocaleString } from '../utils/budget';
import { getAllMatchingItems } from '../utils/localStorage';

interface Props {
  expense: Expense;
  showBudget?: boolean;
}

/**
 * 지출 테이블의 한 행을 나타내는 컴포넌트
 */
export default function ExpenseItem({
  expense: { name, amount, createdAt, budgetId, id },
  showBudget,
}: Props) {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: budgetId,
  })[0];

  return (
    <>
      <td>{name}</td>
      <td>{formatCurrency(amount)}</td>
      <td>{formatDateToLocaleString(createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={
              {
                '--accent': budget.color,
              } as any
            }
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={id} />
          <button
            type="submit"
            title="삭제하기"
            className="btn btn--warning"
            aria-label={`Delete ${name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}
