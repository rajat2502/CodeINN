import React from 'react';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';

function Home() {
  return (
    <div>
      <div className='px-8 antialiased flex justify-center items-center h-auto bg-gray-800'>
        <div className='w-1/2 ml-10'>
          <h2 className='text-6xl text-white font-bold'>CodeINN</h2>
          <h3 className='text-2xl text-gray-400'>
            An instant code editor, that makes programming and development
            easier. Practice quickly and directly from your web browser, without
            any setup needed.
          </h3>
          <Link to={!localStorage.getItem('user') ? '/signup' : '/dashboard'}>
            <button className='px-12 py-2 mt-3 mb-5 bg-purple-700 rounded-full text-blue-100 text-lg shadow-md hover:bg-blue-800'>
              {!localStorage.getItem('user') ? 'Sign Up' : 'View Dashboard'}
            </button>
          </Link>
        </div>
        <div className='w-1/2'>
          <img src={require('assets/img/1.png')} alt='' />
        </div>
      </div>
      <div className='px-8 flex bg-gray-800'>
        <div className='w-1/2 overflow-hidden ml-5 mr-5 p-5'>
          <Link to='/programming/new'>
            <div className='bg-gray-900 rounded-lg shadow mb-5'>
              <h5 className='text-3xl text-white font-bold mb-0 mt-5 pt-5 px-5 ml-5'>
                Practice Programming
              </h5>
              <p className='text-gray-500 text-xl p-5 ml-5'>
                Code from anywhere, on any device, in a variety of languages,
                with easy to save and share options. One IDE for all your needs.
              </p>
              <button className='px-12 py-2 p-5 ml-10 mb-10 bg-red-800 rounded-full text-red-100 text-lg shadow-md hover:bg-red-800'>
                Get Started Now
              </button>
            </div>
          </Link>
        </div>
        <div className='w-1/2 overflow-hidden ml-5 mr-5 p-5'>
          <Link to='/web/new'>
            <div className='bg-gray-900 rounded-lg shadow mb-5'>
              <h5 className='text-3xl text-white font-bold mb-0 mt-5 pt-5 px-5 ml-5'>
                Practice Web Development
              </h5>
              <p className='text-gray-500 text-xl p-5 ml-5'>
                Experiment Easily, create static files, websites or components.
                Live preview, hot reload and auto-deploy make web development as
                fast as flash
                <span role='img' aria-label='flash'>
                  ⚡
                </span>
                .
              </p>
              <button className='px-12 py-2 p-5 ml-10 mb-10 bg-purple-700 rounded-full text-blue-100 text-lg shadow-md hover:bg-blue-800'>
                Get Started Now
              </button>
            </div>
          </Link>
        </div>
      </div>

      <div className='px-8 flex justify-center items-center h-auto bg-gray-800'>
        <div className='w-1/2'>
          <img src={require('assets/img/2.png')} alt='' />
        </div>
        <div className='w-1/2 ml-10'>
          <h2 className='text-4xl text-white ml-5 mr-5 p-2'>
            Discover and Learn More
          </h2>
          <h3 className='text-xl text-gray-400 ml-5 mr-5 p-2'>
            <p>
              CodeINN gives the perfect environment to developers, coders and
              geeks to do more with their tech . Build and deploy a website,
              show off your work, build test cases to learn and debug, and find
              inspiration.
            </p>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
