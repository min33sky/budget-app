import { UserPlusIcon } from '@heroicons/react/24/outline';
import { Form } from 'react-router-dom';
import illustration from '../assets/illustration.jpg';

/**
 * 유저가 없을 때 보여주는 화면
 */
export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="username"
            required
            placeholder="What is your name?"
            aria-label="What is your name?"
            autoComplete="given-name"
          />

          {/* action handling */}
          <input type="hidden" name="_action" value="newUser" />

          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}
