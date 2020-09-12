
<div align="center"> <img align="center" alt="codeinn" src="https://user-images.githubusercontent.com/42115530/92988202-e29fcb80-f4e6-11ea-8464-40a6d0bd5297.png" height='100'></div>


<br /><br />
CodeINN is an instant code editor :page_with_curl:, that makes programming and development easier. Practice quickly and directly from your web browser, without any setup needed. CodeINN gives the perfect environment to developers :man_technologist: , coders :computer: , and geeks :nerd_face: to do more with their tech.
<br /><br />

---

### Backend Technologies to be used:
- Django
- Django Rest Framework
- Heroku
- Sqllite3

## Quick Start

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

### Features to be implemented:
- [ ] Add API endpoints for Login/Signup
- [ ] Add API endpoints to add/update/delete code
- [ ] Add API documentation using Postman
- [ ] Deploy APIs to Heroku
