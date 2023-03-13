import { toast } from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { Expense } from '../types';
import { deleteItem, getAllMatchingItems } from '../utils/localStorage';

export function deleteBudget({ params }: { params: any }) {
  console.log('deleteBudget params: ', params);

  // 1. 예산 삭제
  // 2. 지출 내역중에 삭제한 예산과 관련한 지출 내역 모두 삭제

  try {
    deleteItem('budgets', params.id);

    const associatedExpenses = getAllMatchingItems({
      category: 'expenses',
      key: 'budgetId',
      value: params.id,
    });

    associatedExpenses.forEach((expense: Expense) => {
      deleteItem('expenses', expense.id);
    });

    toast.success('예산이 삭제되었습니다.');
  } catch (error) {
    toast.error('예산 삭제에 실패했습니다.');
  }

  return redirect('/');
}
