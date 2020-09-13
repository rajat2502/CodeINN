<div align="center"> <img align="center" alt="codeinn" src="https://user-images.githubusercontent.com/42115530/92988202-e29fcb80-f4e6-11ea-8464-40a6d0bd5297.png" height='100'></div>

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
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Frajat2502%2FCodeINN.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Frajat2502%2FCodeINN?ref=badge_shield)

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
> **Note**: Support for modern mobile browsers is experimental. The application is not responsive in mobile devices until now.

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
- **Hosting**: Heroku, Netlify

### How to Get Started?

#### GitHub Repository Structure

| S.No. | Branch Name | Purpose |
| --------------- | --------------- | --------------- |
| 1. | [master](https://github.com/rajat2502/CodeINN/tree/master) | contains the main code  |
| 2. | [backend](https://github.com/rajat2502/CodeINN/tree/backend) | contains all backend code |
| 3. | [frontend](https://github.com/rajat2502/CodeINN/tree/frontend) | contains all frontend code |
| 4. | [documentation](https://github.com/rajat2502/CodeINN/tree/documentation) | contains all documentation related changes |

#### Setup


<details>
  <summary><strong>Frontend Setup Instructions</strong></summary>
  
  
- Fork and Clone the repo using
```
$ git clone https://github.com/rajat2502/CodeINN.git
$ cd CodeINN
```
- Change Branch to `frontend` using 
```
$ git checkout frontend
```
- Install node dependencies
```
$ npm install
```
- Run Server at localhost using
```
$ npm start
```

  
</details>


<details>
  <summary><strong>Backend Setup Instructions</strong></summary>

- Fork and Clone the repo using
```
$ git clone https://github.com/rajat2502/CodeINN.git
$ cd CodeINN
```
- Change Branch to `backend` using 
```
$ git checkout backend
```
- Setup Virtual environment
```
$ python3 -m venv env
```
- Activate the virtual environment
```
$ source env/bin/activate
```
- Install dependencies using
```
$ pip install -r requirements.txt
```
- Make migrations using
```
$ python manage.py makemigrations
```
- Migrate Database
```
$ python manage.py migrate
```
- Create a superuser
```
$ python manage.py createsuperuser
```
- Run server using
```
$ python manage.py runserver
``` 
</details>

## Directory Structure

<details>
  <summary><strong>Frontend Directory Structure</strong></summary>

📦CodeINN\
 ┣ 📂.github\
 ┃ ┣ 📂ISSUE_TEMPLATE\
 ┃ ┃ ┣ 📜bug_report.md\
 ┃ ┃ ┗ 📜feature_request.md\
 ┃ ┗ 📜PULL_REQUEST_TEMPLATE.md\
 ┣ 📂public\
 ┃ ┣ 📜fav.png\
 ┃ ┣ 📜index.html\
 ┃ ┣ 📜logo192.png\
 ┃ ┣ 📜logo512.png\
 ┃ ┗ 📜manifest.json\
 ┣ 📂src\
 ┃ ┣ 📂api\
 ┃ ┃ ┗ 📜index.js\
 ┃ ┣ 📂assets\
 ┃ ┃ ┣ 📂fonts\
 ┃ ┃ ┃ ┗ 📜ProximaNovaRegular.ttf\
 ┃ ┃ ┗ 📂img\
 ┃ ┃ ┃ ┣ 📜1.gif\
 ┃ ┃ ┃ ┣ 📜1.jpeg\
 ┃ ┃ ┃ ┣ 📜1.png\
 ┃ ┃ ┃ ┣ 📜2.png\
 ┃ ┃ ┃ ┣ 📜3.png\
 ┃ ┃ ┃ ┣ 📜4.png\
 ┃ ┃ ┃ ┣ 📜5.png\
 ┃ ┃ ┃ ┣ 📜6.png\
 ┃ ┃ ┃ ┣ 📜7.png\
 ┃ ┃ ┃ ┣ 📜8.webp\
 ┃ ┃ ┃ ┣ 📜9.webp\
 ┃ ┃ ┃ ┗ 📜logo.png\
 ┃ ┣ 📂components\
 ┃ ┃ ┣ 📂Dashboard\
 ┃ ┃ ┃ ┣ 📜AddCodeSnip.jsx\
 ┃ ┃ ┃ ┣ 📜AddMkdSnip.jsx\
 ┃ ┃ ┃ ┣ 📜AddWebSnip.jsx\
 ┃ ┃ ┃ ┣ 📜CodeSnip.jsx\
 ┃ ┃ ┃ ┣ 📜Dashboard.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂Home\
 ┃ ┃ ┃ ┣ 📜Home.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂Login\
 ┃ ┃ ┃ ┣ 📜Login.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂MarkDownPreviewer\
 ┃ ┃ ┃ ┣ 📜MarkDownPreviewer.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂ProgramEditor\
 ┃ ┃ ┃ ┣ 📜ProgramEditor.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂Signup\
 ┃ ┃ ┃ ┣ 📜Signup.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📂WebEditor\
 ┃ ┃ ┃ ┣ 📜BottomBar.jsx\
 ┃ ┃ ┃ ┣ 📜DefaultWindow.jsx\
 ┃ ┃ ┃ ┣ 📜DisplayWindow.jsx\
 ┃ ┃ ┃ ┣ 📜Iframe.jsx\
 ┃ ┃ ┃ ┣ 📜ImageUpload.jsx\
 ┃ ┃ ┃ ┣ 📜Shortcuts.jsx\
 ┃ ┃ ┃ ┣ 📜WebCodeEditor.jsx\
 ┃ ┃ ┃ ┣ 📜WebEditor.jsx\
 ┃ ┃ ┃ ┗ 📜index.js\
 ┃ ┃ ┣ 📜CodeEditor.jsx\
 ┃ ┃ ┣ 📜Footer.jsx\
 ┃ ┃ ┣ 📜Icon.jsx\
 ┃ ┃ ┣ 📜Modal.jsx\
 ┃ ┃ ┗ 📜Navbar.jsx\
 ┃ ┣ 📂styles\
 ┃ ┃ ┣ 📜App.css\
 ┃ ┃ ┣ 📜index.css\
 ┃ ┃ ┗ 📜tailwind.css\
 ┃ ┣ 📂utils\
 ┃ ┃ ┣ 📜getIcons.js\
 ┃ ┃ ┣ 📜helpers.js\
 ┃ ┃ ┣ 📜parseMarkdown.js\
 ┃ ┃ ┗ 📜useModal.js\
 ┃ ┣ 📜App.jsx\
 ┃ ┗ 📜index.js\
 ┣ 📜.all-contributorsrc\
 ┣ 📜.gitignore\
 ┣ 📜CODE_OF_CONDUCT.md\
 ┣ 📜CONTRIBUTING.md\
 ┣ 📜LICENSE\
 ┣ 📜README.md\
 ┣ 📜jsconfig.json\
 ┣ 📜netlify.toml\
 ┣ 📜package-lock.json\
 ┣ 📜package.json\
 ┣ 📜postcss.config.js\
 ┗ 📜tailwind.js\

</details>
  
<details>
  <summary><strong>Backend Directory Structure</strong></summary>

📦CodeINN\
 ┣ 📂.vscode\
 ┃ ┗ 📜settings.json\
 ┣ 📂api\
 ┃ ┣ 📂migrations\
 ┃ ┃ ┗ 📜__init__.py\
 ┃ ┣ 📜__init__.py\
 ┃ ┣ 📜admin.py\
 ┃ ┣ 📜apps.py\
 ┃ ┣ 📜models.py\
 ┃ ┣ 📜tests.py\
 ┃ ┣ 📜urls.py\
 ┃ ┗ 📜views.py\
 ┣ 📂codeinn\
 ┃ ┣ 📜__init__.py\
 ┃ ┣ 📜asgi.py\
 ┃ ┣ 📜settings.py\
 ┃ ┣ 📜urls.py\
 ┃ ┣ 📜views.py\
 ┃ ┗ 📜wsgi.py\
 ┣ 📂snips\
 ┃ ┣ 📂migrations\
 ┃ ┃ ┣ 📜0001_initial.py\
 ┃ ┃ ┗ 📜__init__.py\
 ┃ ┣ 📜__init__.py\
 ┃ ┣ 📜admin.py\
 ┃ ┣ 📜apps.py\
 ┃ ┣ 📜models.py\
 ┃ ┣ 📜serializers.py\
 ┃ ┣ 📜tests.py\
 ┃ ┣ 📜urls.py\
 ┃ ┗ 📜views.py\
 ┣ 📂users\
 ┃ ┣ 📂migrations\
 ┃ ┃ ┣ 📜0001_initial.py\
 ┃ ┃ ┗ 📜__init__.py\
 ┃ ┣ 📜__init__.py\
 ┃ ┣ 📜admin.py\
 ┃ ┣ 📜apps.py\
 ┃ ┣ 📜forms.py\
 ┃ ┣ 📜models.py\
 ┃ ┣ 📜serializers.py\
 ┃ ┣ 📜tests.py\
 ┃ ┣ 📜urls.py\
 ┃ ┗ 📜views.py\
 ┣ 📜.gitignore\
 ┣ 📜README.md\
 ┣ 📜manage.py\
 ┗ 📜requirements.txt
  
</details>


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Frajat2502%2FCodeINN.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Frajat2502%2FCodeINN?ref=badge_large)

## Slack Channel
[![chat on slack](https://img.shields.io/badge/chat-on%20slack-brightgreen)](https://join.slack.com/t/codeinnworkspace/shared_invite/zt-hncwfhlc-uZ48U49lBxBLKh_Xd1aXxQ)
<!-- [https://join.slack.com/t/codeinnworkspace/shared_invite/zt-hncwfhlc-uZ48U49lBxBLKh_Xd1aXxQ](https://join.slack.com/t/codeinnworkspace/shared_invite/zt-hncwfhlc-uZ48U49lBxBLKh_Xd1aXxQ)-->

## Progress:
- [x] Add Routes for login, signup, homepage
- [x] Add Routes for dashboard, web editor and program editor
- [x] Integrate login and signup APIs
- [x] Add Image hosting feature to web editor
- [x] Add shortcuts to web editor
- [x] Integrate save pen APIs in Web Editor
- [x] Integrate All Snips API and Dashboard UI
- [x] Add Makrdown previewer
- [x] Integrate save program API for Markdown Previewer
- [ ] Add Programming IDE UI
- [ ] Add language support for some common lanaguges in programming editor (IDE)
- [ ] Integrate Compiler API in IDE
- [ ] Integrate save program API for IDE


## Team:

> Team Members

| S.No. | Name | Role | GitHub Username:octocat: |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Pragati Verma | Backend Development | [@PragatiVerma18](https://github.com/PragatiVerma18) |
| 2. | Rajat Verma | Frontend Developer| [@rajat2502](https://github.com/rajat2502)  |
| 3. | Shristi Singh | UI Designer | [@shristisingh29](https://github.com/shristisingh29)  |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody><tr>
    <td align="center"><a href="https://rajat2502.github.io/portfolio/"><img alt="" src="https://avatars2.githubusercontent.com/u/42200276?v=4" width="100px;"><br><sub><b>Rajat Verma</b></sub></a><br><a href="https://github.com/rajat2502/CodeINN/commits?author=rajat2502" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/PragatiVerma18/"><img alt="" src="https://avatars2.githubusercontent.com/u/42115530?v=4" width="100px;"><br><sub><b>Pragati Verma</b></sub></a><br><a href="https://github.com/rajat2502/CodeINN/commits?author=PragatiVerma18" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/shristisingh29"><img alt="" src="https://avatars1.githubusercontent.com/u/44435610?v=4" width="100px;"><br><sub><b>Shristi Singh</b></sub></a><br><a href="#design-shristisingh29" title="Design">🎨</a></td>
  </tr>
</tbody></table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


[![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/rajat2502/CodeINN/) [![Uses HTML](https://forthebadge.com/images/badges/uses-html.svg)](https://github.com/rajat2502/CodeINN/) [![Uses CSS](https://forthebadge.com/images/badges/uses-css.svg)](https://github.com/rajat2502/CodeINN/) [![Uses JS](https://forthebadge.com/images/badges/uses-js.svg)](https://github.com/rajat2502/CodeINN/)
[![Built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/rajat2502/CodeINN) [![Built By Developers](https://forthebadge.com/images/badges/built-by-developers.svg)](https://github.com/rajat2502/CodeINN)