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
          <span className="accent">재산</span>을 관리하세요
        </h1>
        <p>지금 당장 시작해!!</p>
        <Form method="post">
          <input
            type="text"
            name="username"
            required
            placeholder="이름을 적어주세요"
            aria-label="What is your name?"
            autoComplete="given-name"
          />

          {/* action handling */}
          <input type="hidden" name="_action" value="newUser" />

          <button type="submit" className="btn btn--dark">
            <span>계정 생성하기</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}
