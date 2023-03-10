import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <div className="error">
      Error <h1>Uh oh! We’ve got a problem.</h1>
      <p>{error.message}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
}
