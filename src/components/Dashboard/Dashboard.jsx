import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { getAllSnips } from 'api';

import Footer from 'components/Footer';
import CodeSnip from 'components/Dashboard/CodeSnip';
import AddCodeSnip from 'components/Dashboard/AddCodeSnip';
import AddWebSnip from 'components/Dashboard/AddWebSnip';
import AddMkdSnip from 'components/Dashboard/AddMkdSnip';

function Dashboard() {
  const history = useHistory();

  // local states
  const [snips, setSnips] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * This function fetches the programs made by the user from the backend APIs
   */
  const fetchData = useCallback(async () => {
    const { username } = JSON.parse(localStorage.getItem('user'));
    const data = await getAllSnips(username);
    setSnips(data);
    setLoading(false);
  }, []);

  // If user is not logged In - redirect to login
  useEffect(() => {
    if (localStorage.getItem('user')) {
      fetchData();
    }
  }, [fetchData, history]);

  if (!localStorage.getItem('user')) return <Redirect to='/login' />;

  if (loading)
    return (
      <div
        className='flex items-center justify-center bg-gray-800'
        style={{ height: 'calc(100vh - 70px)' }}
      >
        <img
          className='h-36'
          style={{ width: '20rem' }}
          src={require('assets/img/1.gif')}
          alt='gif'
        />
      </div>
    );

  return (
    <div className='bg-gray-800'>
      <div className='px-8 antialiased flex justify-center items-center h-auto'>
        <div className='w-1/2 ml-10'>
          <h2 className='text-6xl text-white font-bold'>CodeINN Dashboard</h2>
          <h3 className='text-2xl text-gray-400'>
            This is the home to all your code snippets. Continue from where you
            left, easily find the last saved snippet, update, share or delete
            just with a single click.
          </h3>
        </div>
        <div className='w-1/2'>
          <img src={require('assets/img/5.png')} alt='' />
        </div>
      </div>

      <div className='container my-20 mx-auto overflow-hidden'>
        {snips.length > 0 && (
          <h1 className='text-center mb-4 text-4xl text-white font-extrabold'>
            {'<My Programs />'}
          </h1>
        )}
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          <AddCodeSnip />
          <AddWebSnip />
          <AddMkdSnip />
          {snips.map((s) => (
            <CodeSnip key={s.id} s={s} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
