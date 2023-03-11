import { Form, NavLink } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

import logomark from '../assets/logomark.svg';

interface Props {
  username: string;
}

/**
 * NavBar
 */
export default function Nav({ username }: Props) {
  return (
    <nav>
      <NavLink to={'/'} title="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>나의 예산</span>
      </NavLink>

      {username && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!window.confirm('Delete user and all data?')) {
              event.preventDefault();
            }
          }}
        >
          <button
            title="유저 삭제"
            aria-label="Delete User"
            type="submit"
            className="btn btn--warning"
          >
            <span>유저 삭제</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
