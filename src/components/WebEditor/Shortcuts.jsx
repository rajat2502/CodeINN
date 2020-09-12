import React from 'react';

const Shortcuts = () => {
  return (
    <div className='flex'>
      <div>
        <h3 className='text-2xl'>Pen Shortcuts</h3>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + S
          </span>{' '}
          - Save Pen
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + R
          </span>{' '}
          - Open Reset Modal
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + H
          </span>{' '}
          - Download HTML file
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + V
          </span>{' '}
          - Paste Image from clipboard
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + I
          </span>{' '}
          - Import Image Modal
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + K
          </span>{' '}
          - Show Shortcuts Modal
        </p>
      </div>
      <div>
        <h3 className='text-2xl'>Editor Shortcuts</h3>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + /
          </span>{' '}
          - Line comment
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + /
          </span>{' '}
          - Block comment
        </p>
        <p className='mt-2'>
          <span className='bg-white text-sm text-black py-1 px-2 rounded'>
            Ctrl/Cmd + Space
          </span>{' '}
          - Show Hints
        </p>
      </div>
    </div>
  );
};

export default Shortcuts;
