import React from 'react';

import Iframe from 'components/WebEditor/Iframe';

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  mouseMoveHandler,
  mouseUpHandler,
}) => {
  return (
    <div className='flex justify-between flex-col h-full flex-grow'>
      <Iframe
        html={html}
        css={css}
        js={js}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
        mouseMoveHandler={mouseMoveHandler}
        mouseUpHandler={mouseUpHandler}
      />
    </div>
  );
};

export default DisplayWindow;
