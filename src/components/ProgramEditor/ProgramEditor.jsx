import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { runCode, saveSnip, updateSnip, getSnip } from 'api';

import { useModal } from 'utils/useModal';
import { languages } from 'utils/programming_langs';
import { convertToSlug } from 'utils/helpers';

import Modal from 'components/Modal';
import ProgramCodeEditor from 'components/ProgramEditor/ProgramCodeEditor';

function ProgramEditor() {
  const history = useHistory();
  const { id } = useParams();

  // states for the modal
  const [modal, showModal, hideModal] = useModal();
  const [modalContent, setModalContent] = useState('');

  // local states
  const [mode, setMode] = useState('');
  const [languageId, setLanguageId] = useState();
  const [value, setValue] = useState('');
  const [stdIn, setStdIn] = useState('');
  const [compiling, setCompiling] = useState(false);
  const [result, setResult] = useState('');
  const [fileName, setFileName] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * this function sets the content for the save modal
   */
  const showSaveModal = useCallback(() => {
    if (value !== '') {
      setModalContent({
        title: id ? 'Update Program?' : 'Save Program?',
        desc: id ? 'This will Update the Program!' : 'Choose the file name:',
        save: true,
      });
      showModal();
    }
  }, [value, id, showModal]);

  /**
   * this function sets the content for the reset modal
   */
  const showResetModal = useCallback(() => {
    setModalContent({
      title: 'Reset Program?',
      desc: 'This will Reset the program!',
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
    let content = value;
    const body = {
      title: fileName ? fileName : title,
      slug,
      isWeb: false,
      author: username,
      content,
      testcase: stdIn,
      language: `${languageId}`,
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/programming/${slug}`);
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
    let content = languages.find((l) => l.id === languageId).code;
    const body = {
      title: fileName ? fileName : title,
      slug,
      isWeb: false,
      author: username,
      content,
      testcase: '',
      language: `${languageId}`,
    };
    if (!id) {
      await saveSnip(body);
      setRequesting(false);
      hideModal();
      history.push(`/programming/${slug}`);
    } else {
      await updateSnip(id, body);
      setRequesting(false);
      hideModal();
    }
    setStdIn('');
    setValue(languages.find((l) => l.id === languageId).code);
  };

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

  // change the languages and sets the states accordingly
  const changeLang = useCallback(
    (lang) => {
      if (!id) {
        setLanguageId(lang.id);
        setMode(lang.mode);
        setValue(lang.code);
        setFileName(lang.fileName);
      } else {
        setModalContent({
          title: 'Error!',
          desc:
            "Language can't be changed in a saved program! \nPlease open a new program to change language.",
        });
        showModal();
        setTimeout(() => hideModal(), 2000);
      }
    },
    [hideModal, id, showModal]
  );

  // function to run the programming code
  const compileAndRun = async () => {
    setResult({});
    const body = {
      language_id: languageId,
      source_code: value,
      stdin: stdIn,
    };
    setCompiling(true);
    const data = await runCode(body);
    setResult(data);
    setCompiling(false);
  };

  // get the program from the DB if id is present
  const getProgram = useCallback(async () => {
    setLoading(true);
    const data = await getSnip(id);
    const lang = languages.find((l) => l.id === parseInt(data.language));
    setMode(lang.mode);
    setValue(data.content);
    setLanguageId(parseInt(data.language));
    setStdIn(data.testcase);
    setFileName(data.title);
    setTitle(data.title);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id) {
      getProgram();
    } else {
      changeLang(languages[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
      <div
        className='program-editor flex flex-row'
        style={{ height: 'calc(100vh - 70px)', background: '#2e2e2e' }}
      >
        <div className='h-full w-full flex flex-col overflow-hidden'>
          <ProgramCodeEditor
            id={id}
            fileName={fileName}
            setFileName={setFileName}
            value={value}
            setValue={setValue}
            mode={mode}
          />
          <div className='my-4 flex justify-between'>
            <textarea
              placeholder='Add your test input here...'
              value={stdIn}
              onChange={(e) => setStdIn(e.target.value)}
              className='resize-none placeholder-gray-800 border border-gray-500 mx-8 focus:outline-none focus:shadow-outline m-1 border border-gray-300 rounded py-2 px-4 leading-normal border-gray-400'
              style={{ height: 120, width: 400 }}
            ></textarea>
            <button
              className='mx-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition ease-in duration-200'
              style={{ height: 'fit-content' }}
              onClick={compileAndRun}
              disabled={compiling}
            >
              {compiling ? 'Compiling code...' : 'Run and Compile'}
            </button>
          </div>
          <div className='mx-8 my-4'>
            <p className='text-purple-500 font-bold text-2xl underline'>
              Output:
            </p>
            {result.time || result.error ? (
              <p className='h-24 whitespace-pre-wrap mt-2 text-white p-2 rounded border border-white overflow-y-scroll'>
                {result.error ? (
                  <span className='text-red-500'>{result.error}</span>
                ) : result.stdout ? (
                  <span>{result.stdout}</span>
                ) : (
                  <span>No output!</span>
                )}
              </p>
            ) : (
              <p className='text-white mb-12'>Output will appear here.</p>
            )}
          </div>
        </div>
        <div className='px-8'>
          <h1 className='m-2 text-2xl text-white font-extrabold underline'>
            Languages
          </h1>
          {languages.map((lan) => (
            <p
              key={lan.id}
              onClick={() => changeLang(lan)}
              className='bg-blue-500 text-white font-bold p-2 rounded mt-4 cursor-pointer'
              style={
                lan.id === languageId
                  ? { background: '#fff', color: '#4299e1' }
                  : {}
              }
            >
              {lan.name}
            </p>
          ))}
          <Link to='/web/new'>
            <p className='bg-blue-500 text-white font-bold p-2 rounded mt-4 cursor-pointer'>
              HTML, CSS and JS
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProgramEditor;
