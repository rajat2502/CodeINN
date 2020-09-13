import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { saveSnip, updateSnip, getSnip } from 'api';

import { defaultMD, runCode, convertToSlug } from 'utils/helpers';
import { parseMd } from 'utils/parseMarkdown';
import { useModal } from 'utils/useModal';

import Modal from 'components/Modal';
import CodeEditor from 'components/CodeEditor';

function MarkDownPreviewer() {
  const { id } = useParams();
  const history = useHistory();

  // Iframe ref container for the html preview
  const iframeRef = useRef(null);

  // local states
  const [md, setMd] = useState('');
  const [fileName, setFileName] = useState('README.md');
  const [output, setOutput] = useState(parseMd(defaultMD()));
  const [requesting, setRequesting] = useState(false);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  // states for modal
  const [modal, showModal, hideModal] = useModal();
  const [modalContent, setModalContent] = useState('');

  /**
   * this function sets the content for the save modal
   */
  const showSaveModal = useCallback(() => {
    if (md !== '') {
      setModalContent({
        title: id ? 'Update Markdown?' : 'Save Markdown?',
        desc: id ? 'This will Update the Markdown!' : 'Choose the file name:',
        save: true,
      });
      showModal();
    }
  }, [md, id, showModal]);

  /**
   * this function sets the content for the reset modal
   */
  const showResetModal = useCallback(() => {
    setModalContent({
      title: 'Reset Markdown?',
      desc: 'This will Reset the Markdown!',
      reset: true,
    });
    showModal();
  }, [showModal]);

  /**
   * @param {bool} reset - reset md if true
   * This function is used to save the markdown value to the database
   */
  const saveToDB = async (reset = false) => {
    setRequesting(true);
    const slug = fileName ? convertToSlug(fileName) : id;
    const username = JSON.parse(localStorage.getItem('user')).username;
    let content = md;
    const body = {
      title: fileName ? fileName : title,
      slug,
      isWeb: false,
      author: username,
      content,
      testcase: '',
      language: `markdown`,
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/mkd/${slug}`);
    } else {
      await updateSnip(id, body);
      setRequesting(false);
      hideModal();
    }
  };

  /**
   * This function is used to reset the markdown value saved in the database
   */
  const reset = async () => {
    setRequesting(true);
    const slug = fileName ? convertToSlug(fileName) : id;
    const username = JSON.parse(localStorage.getItem('user')).username;
    let content = parseMd(defaultMD());
    const body = {
      title: fileName ? fileName : title,
      slug,
      isWeb: false,
      author: username,
      content,
      testcase: '',
      language: `markdown`,
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/mkd/${slug}`);
    } else {
      await updateSnip(id, body);
      setRequesting(false);
      hideModal();
    }
  };

  /**
   * This function is used to fetch the snip on the basis of the id of the page
   */
  const fetchSnip = useCallback(async () => {
    setLoading(true);
    const data = await getSnip(id);
    setLoading(false);
    setMd(data.content);
    setFileName(data.title);
    setTitle(data.title);
    setTimeout(() => setOutput(parseMd(data.content)), 10);
  }, [id]);

  /**
   * This function is used to set the handler function
   */
  const keyDownHandler = useCallback(
    (e) => {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      const modalsLength = document.querySelectorAll('.modal').length;
      if (cmdKey && !modalsLength && !e.shiftKey) {
        switch (e.keyCode) {
          case 82:
            e.preventDefault();
            showResetModal();
            break;
          case 83:
            e.preventDefault();
            showSaveModal();
            break;
          default:
            return;
        }
      }
    },
    [showResetModal, showSaveModal]
  );

  // Listener for navbar events' shortcuts
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  // run code and covert it into an HTML file
  useEffect(() => {
    if (document.getElementById('mkd-iframe'))
      runCode(iframeRef, output, 'body { color: #fff; }', '');
  }, [output]);

  // parse md
  useEffect(() => {
    const data = parseMd(md);
    setOutput(data);
  }, [md]);

  useEffect(() => {
    if (id) {
      fetchSnip();
    } else {
      const md = defaultMD();
      setMd(md);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
          <p className='whitespace-pre-wrap'>{modalContent.desc}</p>
          <br />
          {modalContent.save && (
            <>
              {!id && (
                <input
                  type='text'
                  value={fileName}
                  className='w-full bg-gray-900 px-2 py-1 rounded mb-3 border border-white'
                  onChange={(e) => setFileName(e.target.value)}
                />
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
                  title='Save Program'
                  style={{ background: '#025c80' }}
                  disabled={requesting}
                  onClick={saveToDB}
                >
                  {id
                    ? requesting
                      ? 'Updating Program...'
                      : 'Update Program'
                    : requesting
                    ? 'Saving Program...'
                    : 'Save Program'}
                </button>
              </div>
            </>
          )}
          {modalContent.reset && (
            <>
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
      <div className='flex' style={{ height: 'calc(100vh - 121px)' }}>
        <div className='w-1/2 border-r-4 border-white'>
          <div className='font-bold text-lg bg-gray-800 flex items-center px-2 py-2 text-white'>
            <input
              className='bg-gray-800 focus:border-white p-1 cursor-pointer'
              type='text'
              title='Change file name'
              value={fileName}
              disabled={id}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <CodeEditor mode='markdown' lang='lang' setFn={setMd} value={md} />
        </div>
        <div className='w-1/2 h-full border-l-4 border-white'>
          <div className='font-bold text-lg bg-gray-800 flex items-center px-2 py-2 text-white'>
            <span className='p-1'>Output</span>
          </div>
          <iframe
            id='mkd-iframe'
            title='Md Preview'
            ref={iframeRef}
            className='bg-gray-900 h-full w-full'
          />
        </div>
      </div>
    </>
  );
}

export default MarkDownPreviewer;
