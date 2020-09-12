import React, { useRef, useEffect } from 'react';

import { runCode } from 'utils/helpers';

const Iframe = ({ html, css, js, mouseMoveHandler, mouseUpHandler }) => {
  const iframeRef = useRef(null);

  // run code and covert it into an HTML file
  useEffect(() => {
    runCode(iframeRef, html, css, js);
  }, [html, css, js]);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      iframeDocument.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.addEventListener('mouseup', mouseUpHandler);
    return () => {
      iframeDocument.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [mouseUpHandler]);

  return (
    <section className='h-full'>
      <iframe
        title='result'
        className='h-full border-none w-full'
        ref={iframeRef}
      />
    </section>
  );
};

export default Iframe;
