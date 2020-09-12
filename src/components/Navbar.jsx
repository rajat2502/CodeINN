import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Icon from 'components/Icon';

const Navbar = ({ user, setUser }) => {
  const history = useHistory();

  /**
   * This function is used to logout the user
   * by clearing the localStorage and updating the state
   */
  const logOut = () => {
    setUser({});
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div
      className='bg-gray-900 flex justify-between items-center py-4 px-2'
      style={{ height: 70 }}
    >
      <Link
        to='/'
        className='mx-2 flex items-center text-2xl text-white font-bold'
      >
        <img
          src={require('assets/img/logo.png')}
          className='h-12'
          alt='CodeINN'
        />
      </Link>
      {!user.username ? (
        <Link
          to='/login'
          className='mx-2 px-6 py-1 text-white font-bold text-lg border border-white rounded'
        >
          Login
        </Link>
      ) : (
        <div className='p-10'>
          <div className='dropdown inline-block relative'>
            <button className='text-white text-lg font-bold py-2 px-6 inline-flex items-center'>
              <span className='mr-1'>
                {JSON.parse(localStorage.getItem('user')) &&
                  JSON.parse(localStorage.getItem('user')).username}
              </span>
              <Icon name='dropdown' style={{ fill: '#fff' }} />
            </button>
            <ul className='z-10 dropdown-menu absolute hidden text-black pt-1'>
              <li className=''>
                <Link
                  to='/dashboard'
                  className='rounded-t bg-gray-400 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap'
                >
                  Dashboard
                </Link>
              </li>
              <li className=''>
                <Link
                  to='/web/new'
                  className='bg-gray-400 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap'
                >
                  New Web Pen
                </Link>
              </li>
              <li className=''>
                <Link
                  to='/programming/new'
                  className='bg-gray-400 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap'
                >
                  New Program
                </Link>
              </li>
              <li className=''>
                <Link
                  to='/mkd/new'
                  className='bg-gray-400 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap'
                >
                  New Markdown
                </Link>
              </li>
              <li
                className='cursor-pointer rounded-b bg-gray-400 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap'
                onClick={logOut}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
