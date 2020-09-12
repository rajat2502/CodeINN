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

export const defaultMD = () => `<div align="center"><img src="https://i.ibb.co/pJTm5d0/logo.png" alt="logo.png" align="center" height='100' /></div>

<br /><br />
# CodeINN
[CodeINN](https://codeinn.netlify.app/) is an instant code editor :page_with_curl:, that makes programming and development easier. Practice quickly and directly from your web browser, without any setup needed. CodeINN gives the perfect environment to developers :man_technologist: , coders :computer: , and geeks :nerd_face: to do more with their tech.

> See Hosted Version [Here](https://codeinn.netlify.app/)



<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![MIT License](https://img.shields.io/github/license/rajat2502/CodeINN)](https://github.com/rajat2502/CodeINN/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
[![Open Issues](https://img.shields.io/github/issues/rajat2502/CodeINN)](https://github.com/rajat2502/CodeINN/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/rajat2502/CodeINN)](https://github.com/rajat2502/CodeINN/pulls)
[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Frajat2502%2FCodeINN)](https://github.com/rajat2502/CodeINN)
[![watchers](https://img.shields.io/github/watchers/rajat2502/CodeINN?style=social)](https://github.com/rajat2502/CodeINN/watchers)
[![stars](https://img.shields.io/github/stars/rajat2502/CodeINN?style=social)](https://github.com/rajat2502/CodeINN/stargazers)
[![forks](https://img.shields.io/github/forks/rajat2502/CodeINN?style=social)](https://github.com/rajat2502/CodeINN/network/members)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Features
- **Single Platform** for web development and programming, without the need for constantly switching tools
- **live preview** of the code changes
- **Syntax higlighting, bracket matching, code formatting and autocompletion**
- Easy save, share, reset or delete options
- Lightweight and fast
- Supports **C, C++, Python, HTML, CSS, JS**

## Browser Support
- **Firefox**:	version 4 and up
- **Chrome**:	any version
- **Safari**:	version 5.2 and up
- **Internet Explorer/Edge**:	version 8 and up
- **Opera**:	version 9 and up
> **Note**: Support for modern mobile browsers is experimental. The website is not responsive in mobile devices until now.

## Technology Stack to be used:

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>  <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>  <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>  <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>  <img src="https://img.shields.io/badge/adobe%20photoshop%20-%2331A8FF.svg?&style=for-the-badge&logo=adobe%20photoshop&logoColor=white"/> <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/> <img src ="https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/>

- **Frontend**: ReactJS, React-Hooks, React-Codemirror-2
- **Backend**: Django, Django Rest Framework
- **External APIs**: ImgBB API (For hosting images)
- **IDE**: VS Code
- **Design**: Adobe Photoshop, Canva
- **API Testing & Documentation**: Postman
- **Version Control**: Git and GitHub
- **Database**: Sqllite3
- **Hosting**: Heroku, Netlify`;
