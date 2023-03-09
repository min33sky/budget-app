import { Form, NavLink } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

import logomark from '../assets/logomark.svg';

interface Props {
  username: string;
}

export default function Nav({ username }: Props) {
  return (
    <nav>
      <NavLink to={'/'} title="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>

      {username && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm('Delete user and all data?')) {
              event.preventDefault();
            }
          }}
        >
          <button>
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
