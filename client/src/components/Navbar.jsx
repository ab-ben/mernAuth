import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

export default function NavBar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="relative bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <h1 className="text-xl font-bold">AuthApp</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className="ml-8 text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Account
                </Link>
                <button
                  onClick={handleSignOut}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-slate-700 hover:bg-slate-800"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="ml-8 text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">AuthApp</h1>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Home
                  </span>
                </Link>
                {currentUser ? (
                  <>
                    <Link
                      to="/profile"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Account
                      </span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full text-left"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Sign Out
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/sign-in"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Sign In
                      </span>
                    </Link>
                    <Link
                      to="/sign-up"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Sign Up
                      </span>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
