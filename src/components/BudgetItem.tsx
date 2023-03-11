import { Budget } from '../types';
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from '../utils/budget';

interface Props {
  budget: Budget;
}

export default function BudgetItem({
  budget: { id, name, amount, color },
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
        <p>{formatCurrency(amount)} 총 예산</p>
      </div>
      <progress value={spent} max={amount}>
        {formatPercentage(spent / amount)}
      </progress>

      <div className="progress-text">
        <small>{formatCurrency(spent)} 소비</small>
        <small>{formatCurrency(amount - spent)} 남음</small>
      </div>
    </div>
  );
}
