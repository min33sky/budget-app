import React from 'react';
import { Expense } from '../types';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
  showBudget?: boolean;
}

export default function Table({ expenses, showBudget = true }: Props) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {['내용', '금액', '날짜', showBudget ? '예산' : ''].map(
              (item, index) => {
                return <th key={index}>{item}</th>;
              },
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <ExpenseItem expense={expense} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
