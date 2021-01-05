export let content = '';

// logic to display the variales as an iframe
export const runCode = (iframeRef, html, css, js) => {
  if (html !== '') {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <link rel="icon" href="./favicon.png" />
      <link rel="icon" href="https://webcomb.netlify.app/favicon.png" />
      <meta charset="UTF-8">
      <meta name="viewport content="width=device-width, initial-scale=1.0">
      <meta http-equip="X-UA-Compatible content="ie=edge">
      <title>Pen</title>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <pre style="display: none;"></pre>
      <script type="text/javascript">
        ${js}
      </script>
    </body>
    </html>
    `;
    document.open();
    document.write(content);
    document.close();
  }
};

// logic to download file
export const downloadHTMLFile = () => {
  const link = document.createElement('a');
  const mimeType = 'text/html' || 'text/plain';
  link.setAttribute('download', 'index.html');
  link.setAttribute(
    'href',
    'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(content)
  );
  link.click();
};

export const convertToSlug = (Text) =>
  Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

export const defaultMD = () => `<div align="center"><img src="https://i.ibb.co/pJTm5d0/logo.png" alt="logo.png" align="center" height='100' /></div>`
