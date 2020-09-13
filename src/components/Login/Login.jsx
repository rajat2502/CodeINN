import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { login } from 'api';

function Login({ user, setUser }) {
  const history = useHistory();

  // local states
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [error, setError] = useState('');

  /**
   * @param {object} e - This is the form submit event for login
   * This function is used to login using the backend APIs
   * and change the user state accordingly
   */
  const loginUser = async (e) => {
    e.preventDefault();
    setRequesting(true);
    const data = await login({ username, email, password });
    if (!data.error) {
      setUser({ username });
      history.push('/dashboard');
    } else {
      setError('Please make sure the credentials are correct!');
    }
    setRequesting(false);
  };

  // if already logged in, Redirect to dashboard
  if (user.username) return <Redirect to='/dashboard' />;

  return (
    <div
      className='flex justify-center items-center overflow-hidden'
      style={{
        height: 'calc(100vh - 70px)',
        background: '#2a2a2a',
      }}
    >
      <div className='text-gray-100 flex justify-center'>
        <div className='max-w-screen-xl m-0 sm:m-20 bg-gray-700 shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='flex justify-center items-center lg:w-1/2 xl:w-5/12 p-8 sm:p-12'>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl xl:text-3xl font-bold'>
                Login to CodeINN
              </h1>
              <div className='w-full flex-1 mt-8'>
                <div className='text-black mx-auto max-w-xs'>
                  <form onSubmit={loginUser}>
                    <input
                      className='w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                      type='text'
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      placeholder='Username'
                      required
                    />
                    <input
                      className='w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                      type='email'
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder='Email'
                      required
                    />
                    <input
                      className='w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                      type='password'
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder='Password'
                      required
                    />
                    <button
                      type='submit'
                      disabled={requesting}
                      className='w-full px-12 py-2 mt-5 mb-5 bg-red-800 rounded-full text-red-100 text-lg shadow-md hover:bg-red-700'
                    >
                      {requesting ? 'Logging In...' : 'Login'}
                    </button>
                  </form>
                  {error && <p className='text-red-600'>{error}</p>}
                  <Link to='/signup'>
                    <p className='text-white'>Don't have an account?</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 bg-gray-800 text-center hidden lg:flex rounded-r-lg'>
            <div className='m-12 xl:m-16 w-full'>
              <img src={require('assets/img/4.png')} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
