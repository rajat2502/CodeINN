<div align="center"> <img align="center" alt="codeinn" src="https://user-images.githubusercontent.com/42115530/92988202-e29fcb80-f4e6-11ea-8464-40a6d0bd5297.png" height='100'></div>


<br /><br />
CodeINN is an instant code editor :page_with_curl:, that makes programming and development easier. Practice quickly and directly from your web browser, without any setup needed. CodeINN gives the perfect environment to developers :man_technologist: , coders :computer: , and geeks :nerd_face: to do more with their tech.
<br /><br />


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Technology Stack to be used:
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

> **Frontend Setup Instructions**
<details>
  <summary>Click to expand!</summary>
  
  
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

> **Backend Setup Instructions**
<details>
  <summary>Click to expand!</summary>

- Fork and Clone the repo using
```
git clone https://github.com/rajat2502/CodeINN.git
cd CodeINN
```
- Change Branch to `backend` using 
```
git checkout backend
```
- Setup Virtual environment
```
python3 -m venv env
```
- Activate the virtual environment
```
source env/bin/activate
```
- Install dependencies using
```
pip install -r requirements.txt
```
- Make migrations using
```
python manage.py makemigrations
```
- Migrate Database
```
python manage.py migrate
```
- Create a superuser
```
python manage.py createsuperuser
```
- Run server using
```
python manage.py runserver
```

  
</details>

### Features to be implemented:
- [x] Add Routes for login, signup, homepage
- [x] Add Routes for dashboard, web editor and program editor
- [x] Integrate login and signup APIs
- [x] Add Image hosting feature to web editor
- [x] Add shortcuts to web editor
- [x] Integrate save pen APIs in Web Editor
- [ ] Add Programming IDE UI
- [ ] Add language support for some common lanaguges in programming editor (IDE)
- [ ] Integrate Compiler API in IDE
- [ ] Integrate save program API for IDE
- [ ] Add Makrdown previewer
- [ ] Integrate save program API for Markdown Previewer

## Team:

> Team Members

| S.No. | Team Member Name | Role | GitHub Username:octocat: |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Pragati Verma | Backend Development | [@PragatiVerma18](https://github.com/PragatiVerma18) |
| 2. | Rajat Verma | Frontend Developer| [@rajat2502](https://github.com/rajat2502)  |
| 3. | Shristi Singh | UI Designer/Frontend Developer | [@shristisingh29](https://github.com/shristisingh29)  |

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
