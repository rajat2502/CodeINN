import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { defaultMD, runCode } from 'utils/helpers';
import { parseMd } from 'utils/parseMarkdown';

import CodeEditor from 'components/CodeEditor';

function MarkDownPreviewer() {
  const { id } = useHistory();

  const [md, setMd] = useState('');
  const [fileName, setFileName] = useState('README.md');
  const [output, setOutput] = useState(parseMd(defaultMD()));

  const iframeRef = useRef(null);

  // run code and covert it into an HTML file
  useEffect(() => {
    runCode(iframeRef, output, 'body { color: #fff; }', '');
  }, [output]);

  // parse md
  useEffect(() => {
    const data = parseMd(md);
    setOutput(data);
  }, [md]);

  useEffect(() => {
    const md = defaultMD();
    setMd(md);
  }, []);

  return (
    <div className='flex' style={{ height: 'calc(100vh - 121px)' }}>
      <div className='w-1/2 border-r-8 border-white'>
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
      <div className='w-1/2 h-full border-r-8 border-white'>
        <div className='font-bold text-lg bg-gray-800 flex items-center px-2 py-2 text-white'>
          <span className='p-1'>Output</span>
        </div>
        <iframe
          title='Md Preview'
          ref={iframeRef}
          className='bg-gray-900 h-full w-full'
        >
          {output}
        </iframe>
      </div>
    </div>
  );
}

export default MarkDownPreviewer;
