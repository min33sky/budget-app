import { Expense } from '../types';
import { formatCurrency, formatDateToLocaleString } from '../utils/budget';

interface Props {
  expense: Expense;
}

export default function ExpenseItem({
  expense: { name, amount, createdAt },
}: Props) {
  return (
    <>
      <td>{name}</td>
      <td>{formatCurrency(amount)}</td>
      <td>{formatDateToLocaleString(createdAt)}</td>
    </>
  );
}
