# CodeINN

![logo](https://user-images.githubusercontent.com/42115530/92987070-cc8d0d80-f4dc-11ea-8af3-f16da1eb1302.png)

CodeINN is a playground to practice frontend development and to run different programming languages.
<br /><br />

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
