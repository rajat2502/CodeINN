import React from 'react';

import CodeEditor from 'components/CodeEditor';

function ProgramCodeEditor({
  id,
  fileName,
  setFileName,
  mode,
  value,
  setValue,
}) {
  return (
    <>
      <div>
        <div className='font-bold text-lg bg-gray-800 flex items-center px-2 py-2 text-white'>
          <input
            className='bg-gray-800 focus:border-white p-1 cursor-pointer'
            type='text'
            title='Change file name'
            value={fileName}
            disabled={id}
            onChange={(e) => setFileName(e.target.value)}
          />
          <span></span>
        </div>
      </div>
      <CodeEditor
        mode={mode}
        value={value}
        setFn={setValue}
        lang={value}
        programming={true}
      />
    </>
  );
}
export default ProgramCodeEditor;
