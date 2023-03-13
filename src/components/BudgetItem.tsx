import { BanknotesIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Form, Link } from 'react-router-dom';
import { Budget } from '../types';
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from '../utils/budget';

interface Props {
  budget: Budget;
  showDelete?: boolean;
}

export default function BudgetItem({
  budget: { id, name, amount, color },
  showDelete = false,
}: Props) {
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={
        {
          '--accent': color,
        } as any
      }
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted </p>
      </div>

      <progress value={spent} max={amount}>
        {formatPercentage(spent / amount)}
      </progress>

      <div className="progress-text">
        <small>{formatCurrency(spent)} 소비</small>
        <small>{formatCurrency(amount - spent)} 남음</small>
      </div>

      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(e) => {
              if (
                !window.confirm(
                  'Are you sure you want to permanently delete this budget?',
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}
