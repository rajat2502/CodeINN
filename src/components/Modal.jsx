import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, closeModal, children }) => {
  // To close the modal when clicked outside the modal
  useEffect(() => {
    const closeModalEvent = (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
    document.querySelector('.modal').addEventListener('click', closeModalEvent);
    return () => {
      document
        .querySelector('.modal')
        .removeEventListener('click', closeModalEvent);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div
      className='modal flex justify-center items-center h-full w-full absolute z-10'
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div
        className='modal-main bg-gray-900 text-white rounded-sm'
        style={{
          minWidth: 400,
          maxWidth: 600,
          animation: 'animateOpacity 0.25s',
        }}
      >
        <div
          className='text-3xl flex justify-between items-center p-4'
          style={{
            borderBottom: '0.6px solid #cacaca',
            letterSpacing: '0.1ch',
          }}
        >
          <p>{title}</p>
          <button
            onClick={closeModal}
            title='close'
            className='rounded h-8 w-8 flex items-center justify-center bg-gray-700'
          >
            &times;
          </button>
        </div>
        <div className='p-4'>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
