import React, { useState, useEffect, useCallback } from 'react';

import { useModal } from 'utils/useModal';

import Icon from 'components/Icon';
import Modal from 'components/Modal';
import ImageUpload from 'components/WebEditor/ImageUpload';
import Shortcuts from 'components/WebEditor/Shortcuts';

const BottomBar = ({ save, reset, download }) => {
  const [modal, showModal, hideModal] = useModal();
  const [modalTitle, setModalTitle] = useState(null);
  const [clipboardFile, setClipboardFile] = useState(null);

  // Show shortcuts modal
  const showShortcuts = useCallback(() => {
    setModalTitle('Shortcuts');
    showModal();
  }, [showModal]);

  // Show Image modal
  const showImageModal = useCallback(() => {
    setModalTitle('Import Images');
    showModal();
  }, [showModal]);

  // Close any opened modal
  const closeModal = () => {
    hideModal();
    setModalTitle(null);
    setClipboardFile(null);
  };

  // Key-down handlers
  const keyDownHandler = useCallback(
    (e) => {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      const modalsLength = document.querySelectorAll('.modal').length;
      if (cmdKey && !modalsLength && !e.shiftKey) {
        switch (e.keyCode) {
          case 73:
            e.preventDefault();
            showImageModal();
            break;
          case 75:
            e.preventDefault();
            showShortcuts();
            break;
          default:
            return;
        }
      }
    },
    [showImageModal, showShortcuts]
  );

  // For pasting the image
  const pasteImageHandler = useCallback(
    (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          setClipboardFile(items[i].getAsFile());
          showImageModal();
        }
      }
    },
    [showImageModal]
  );

  // Listener for paste from clipboard
  useEffect(() => {
    window.addEventListener('paste', pasteImageHandler, false);

    return () => {
      window.removeEventListener('paste', pasteImageHandler, false);
    };
  }, [pasteImageHandler]);

  // Listener for navbar events' shortcuts
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <>
      {modal && (
        <Modal title={modalTitle} closeModal={closeModal}>
          {modalTitle === 'Shortcuts' ? (
            <Shortcuts />
          ) : (
            <ImageUpload clipboardFile={clipboardFile} />
          )}
        </Modal>
      )}
      <div className='text-sm text-white flex p-2 bg-gray-800 h-10'>
        <button
          className='focus:outline-none rounded-sm border border-white mx-2 flex items-center px-2 py-2'
          onClick={save}
        >
          <Icon name='save' style={{ fill: '#fff' }} />
          &nbsp;Save
        </button>
        <button
          className='focus:outline-none rounded-sm border border-white mx-2 flex items-center px-2 py-2'
          onClick={reset}
        >
          <Icon name='reset' style={{ fill: '#fff' }} />
          &nbsp;Reset
        </button>
        <button
          className='focus:outline-none rounded-sm border border-white mx-2 flex items-center px-2 py-2'
          onClick={download}
        >
          <Icon name='download' style={{ fill: '#fff' }} />
          &nbsp;Download
        </button>
        <button
          className='focus:outline-none rounded-sm border border-white mx-2 flex items-center px-2 py-2'
          onClick={showImageModal}
        >
          <Icon name='import' />
          &nbsp;Import Image
        </button>
        <button
          className='focus:outline-none rounded-sm border border-white mx-2 flex items-center px-2 py-2'
          onClick={showShortcuts}
        >
          <Icon name='shortcut' />
          &nbsp;Shortcuts
        </button>
      </div>
    </>
  );
};
export default BottomBar;
