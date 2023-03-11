import { redirect } from 'react-router-dom';
import { deleteItem } from '../utils/localStorage';

export async function logoutAction() {
  deleteItem('username');
  deleteItem('budgets');
  deleteItem('expenses');

  return redirect('/');
}
