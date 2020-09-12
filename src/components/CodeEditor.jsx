import React from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';

// language support imports
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/php/php';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/markdown/markdown';

// addons imports
import 'codemirror/keymap/sublime';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/javascript-hint';
// import 'codemirror/addon/edit/closetag';  - for autoclosetag can be added later

// language styles imports
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/hint/show-hint.css';

function CodeEditor({
  value,
  mode,
  setFn,
  autofocus,
  lang,
  programming = false,
}) {
  return (
    <Codemirror
      value={value}
      options={{
        mode,
        theme: programming ? '3024-night' : 'monokai',
        keyMap: 'sublime',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
        tabSize: 2,
        matchBrackets: true,
        autoCloseBrackets: true,
        autofocus,
        extraKeys: {
          'Ctrl-/': 'toggleComment',
          'Cmd-/': 'toggleComment',
          'Ctrl-Space': 'autocomplete',
          'Cmd-Space': 'autocomplete',
        },
      }}
      onBeforeChange={(editor, data, lang) => {
        setFn(lang);
      }}
    />
  );
}

export default CodeEditor;
