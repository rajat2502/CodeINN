import React from 'react';
import { Link } from 'react-router-dom';

function CodeSnip({ s }) {
  return (
    <div className='my-1 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
      <Link
        to={
          s.isWeb
            ? `/web/${s.slug}`
            : s.language === 'markdown'
            ? `/mkd/${s.slug}`
            : `/programming/${s.slug}`
        }
      >
        <article className='overflow-hidden rounded-lg shadow-lg bg-gray-900'>
          <p>
            <img
              alt='Placeholder'
              className='block h-auto w-full'
              src={require(s.isWeb
                ? 'assets/img/8.webp'
                : s.language === 'markdown'
                ? 'assets/img/9.webp'
                : 'assets/img/7.png')}
            />
          </p>

          <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
            <h1 className='font-bold text-lg'>
              <p className='no-underline hover:underline text-white'>
                {s.title.length > 18
                  ? `${s.title.substring(0, 18)}...`
                  : s.title}
              </p>
            </h1>
            <p className='text-white text-sm'>
              updated on <br />
              {new Date(s.updated_on.slice(0, 10)).toLocaleDateString()}
            </p>
          </header>
        </article>
      </Link>
    </div>
  );
}

export default CodeSnip;
