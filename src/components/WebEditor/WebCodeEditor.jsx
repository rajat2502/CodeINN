import React, { useState } from 'react';

import CodeEditor from 'components/CodeEditor';

let numOfMinimisedScreens = 0;

const WebCodeEditor = ({ langName, value, lang, mode, setFn }) => {
  const [minimisedEditor, setminimisedEditor] = useState(false);

  // Function to resize the editors
  const resizeEditor = () => {
    if (numOfMinimisedScreens < 2) {
      if (minimisedEditor) {
        numOfMinimisedScreens--;
      } else {
        numOfMinimisedScreens++;
      }
      setminimisedEditor(!minimisedEditor);
    } else if (minimisedEditor) {
      numOfMinimisedScreens--;
      setminimisedEditor(!minimisedEditor);
    }
  };

  return (
    <div
      className='h-full flex flex-col overflow-hidden code-editor'
      style={minimisedEditor ? { height: '55px', overflow: 'initial' } : null}
    >
      <div
        className='cursor-pointer bg-gray-800 flex items-center justify-between px-3 py-3 text-white'
        onClick={resizeEditor}
      >
        <span>{langName}</span>
        <button className='flex justify-center items-center bg-black text-white rounded font-bold w-6 h-6'>
          {minimisedEditor ? '+' : '-'}
        </button>
      </div>
      <CodeEditor
        value={value}
        mode={mode}
        setFn={setFn}
        autofocus={mode === 'htmlmixed' ? true : false}
        lang={lang}
      />
    </div>
  );
};

export default WebCodeEditor;
