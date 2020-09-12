import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getSnip, saveSnip, updateSnip } from 'api';

import { useModal } from 'utils/useModal';
import { downloadHTMLFile, convertToSlug } from 'utils/helpers.js';

import Modal from 'components/Modal';
import DefaultWindow from 'components/WebEditor/DefaultWindow';
import DisplayWindow from 'components/WebEditor/DisplayWindow';
import WebCodeEditor from 'components/WebEditor/WebCodeEditor';
import BottomBar from 'components/WebEditor/BottomBar';

const WebEditor = () => {
  const history = useHistory();
  const { id } = useParams();

  // local states
  const [html, sethtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');
  const [modalContent, setModalContent] = useState({});
  const [modal, showModal, hideModal] = useModal();
  const [penName, setPenName] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * This function is used to set the modalContent and show the save modal
   */
  const savePen = useCallback(() => {
    if (html !== '' || css !== '' || js !== '') {
      setModalContent({
        title: id ? 'Update Pen?' : 'Choose a pen name',
        desc: id ? 'The pen will be updated!' : 'Pen name:',
        save: true,
      });
      showModal();
    }
  }, [css, html, id, js, showModal]);

  /**
   *
   * @param {bool} reset  - reset is a bool
   * This function is used to save the snip to DB in backend
   */
  const saveToDB = async (reset = false) => {
    setRequesting(true);
    const slug = penName ? convertToSlug(penName) : id;
    const username = JSON.parse(localStorage.getItem('user')).username;
    const content = JSON.stringify({ html, css, js });
    // : JSON.stringify({ html: '', css: '', js: '' });
    const body = {
      title: penName ? penName : title,
      slug,
      isWeb: true,
      author: username,
      content,
      language: 'web',
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/web/${slug}`);
    } else {
      await updateSnip(id, body);
      setRequesting(false);
      hideModal();
    }
  };

  /**
   * This function is used to get the saved pen from the DB and set the states accordingly
   */
  const getPen = useCallback(async () => {
    setLoading(true);
    const data = await getSnip(id);
    const content = JSON.parse(data.content);
    sethtml(content.html);
    setcss(content.css);
    setjs(content.js);
    setTitle(data.title);
    setLoading(false);
  }, [id]);

  /**
   * This function is used to set the modal content and show the modal
   */
  const showResetModal = useCallback(() => {
    if (html !== '' || css !== '' || js !== '') {
      setModalContent({
        title: 'Reset Pen?',
        desc: 'Clicking the Reset button will reset the Pen!',
        reset: true,
      });
      showModal();
    }
  }, [css, html, js, showModal]);

  /**
   * This function is used to reset the Pen and update the same to DB
   */
  const reset = async () => {
    sethtml('');
    setcss('');
    setjs('');
    const reset = true;
    await saveToDB(reset);
    setRequesting(true);
    const slug = penName ? convertToSlug(penName) : id;
    const username = JSON.parse(localStorage.getItem('user')).username;
    const content = JSON.stringify({ html: '', css: '', js: '' });
    const body = {
      title: penName ? penName : title,
      slug,
      isWeb: true,
      author: username,
      content,
      language: 'web',
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/web/${slug}`);
    } else {
      await updateSnip(id, body);
      setRequesting(false);
      hideModal();
    }
  };

  /**
   * This function is used to set the shortcuts
   */
  const keyDownHandler = useCallback(
    (e) => {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      const modalsLength = document.querySelectorAll('.modal').length;
      if (cmdKey && !modalsLength && !e.shiftKey) {
        switch (e.keyCode) {
          case 72:
            e.preventDefault();
            downloadHTMLFile();
            break;
          case 82:
            e.preventDefault();
            showResetModal();
            break;
          case 83:
            e.preventDefault();
            savePen();
            break;
          default:
            return;
        }
      }
    },
    [showResetModal, savePen]
  );

  // Listener for navbar events' shortcuts
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  // logic to get data from local storage when component mounts
  useEffect(() => {
    if (id) {
      getPen();
    }
  }, [getPen, id]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      history.push('/login');
    }
  }, [history]);

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
    <>
      {modal && (
        <Modal title={modalContent.title} closeModal={hideModal}>
          <p>{modalContent.desc}</p>
          {modalContent.save && (
            <>
              {!id ? (
                <input
                  value={penName}
                  onChange={(e) => setPenName(e.target.value)}
                  className='w-full bg-gray-900 px-2 py-1 rounded mb-3 border border-white'
                  placeholder='Eg: Hello_World'
                />
              ) : (
                <br />
              )}
              <div className='flex justify-between'>
                <button
                  className='px-2 py-1'
                  title='cancel'
                  onClick={hideModal}
                >
                  Cancel
                </button>
                <button
                  className='px-2 py-1 bg-blue-600'
                  title='Save pen'
                  style={{ background: '#025c80' }}
                  disabled={requesting}
                  onClick={saveToDB}
                >
                  {id
                    ? requesting
                      ? 'Updating Pen...'
                      : 'Update Pen'
                    : requesting
                    ? 'Saving Pen...'
                    : 'Save Pen'}
                </button>
              </div>
            </>
          )}
          {modalContent.reset && (
            <>
              <br />
              <div className='flex justify-between'>
                <button
                  className='px-2 py-1'
                  title='cancel'
                  onClick={hideModal}
                >
                  Cancel
                </button>
                <button
                  className='px-2 py-1 danger-btn'
                  title='reset pen'
                  onClick={reset}
                  disabled={requesting}
                >
                  {requesting ? 'Resetting pen...' : 'Reset Pen'}
                </button>
              </div>
            </>
          )}
        </Modal>
      )}

      <div>
        <div
          className='flex justify-between'
          style={{ height: 'calc(100vh - 110px' }}
        >
          {html === '' ? (
            <DefaultWindow />
          ) : (
            <DisplayWindow
              html={html}
              css={css}
              js={js}
              reset={reset}
              saveToLocalStorage={savePen}
            />
          )}

          <section
            className='flex flex-col relative flex-shrink-0	'
            style={{ width: 576 }}
          >
            <WebCodeEditor
              langName='HTML'
              value={html}
              mode='htmlmixed'
              lang={html}
              setFn={sethtml}
            />
            <WebCodeEditor
              langName='CSS'
              value={css}
              mode='css'
              lang={css}
              setFn={setcss}
            />
            <WebCodeEditor
              langName='JavaScript'
              value={js}
              mode='javascript'
              lang={js}
              setFn={setjs}
            />
          </section>
        </div>

        <BottomBar
          save={savePen}
          reset={showResetModal}
          download={downloadHTMLFile}
        />
      </div>
    </>
  );
};

export default WebEditor;
