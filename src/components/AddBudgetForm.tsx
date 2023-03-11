import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
import { useFetcher } from 'react-router-dom';

/**
 * 새로운 예산 작성 폼
 */
export default function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';
  const formRef = useRef<HTMLFormElement>(null);
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
      focusRef.current?.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">새로운 예산을 작성하세요</h2>

      <fetcher.Form ref={formRef} method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">예산 이름</label>
          <input
            ref={focusRef}
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="예) 식료품비"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">금액</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="예) ₩30000"
            required
            inputMode="decimal"
          />
        </div>

        <input type="hidden" name="_action" value="createBudget" />

        <button type="submit" disabled={isSubmitting} className="btn btn--dark">
          {isSubmitting ? (
            <span>처리중...🚀</span>
          ) : (
            <>
              <span>생성하기</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}
