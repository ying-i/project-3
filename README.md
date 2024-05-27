pip install -r requirements.txt

flask run

MongoDB
database: stories
collection: story
refresh documents to see the updated data
start MongoDB server:
1.navigate to the bin directory 
cd D:\Computer1\Developer tools\MongoDB\Server\7.0\bin
2.use the mongod command to start the MongoDB server and specify the data directory
mongod --dbpath "D:\Computer1\Developer tools\MongoDB\Server\7.0\data"
(beacuse my directory url has space, so use double quotes)
3.enter url http://127.0.0.1:27017/ on website, mongoDB started successfully if there is: It looks like you are trying to access MongoDB over HTTP on the native driver port.


generate_story folder is source code folder.
requirements.txt should be outside the generate_story folder.
create a macros folder, because the navbar is macros.
pycache directory is automatically created by python to store compiled bytecode files.


pip freeze: to see what you've installed

pip install gradio_client

pip install flask

pip install flask-sqlalchemy ----no need

pip install flask-migrate  (manage database migrations for SQLAlchemy-based app)----no need 

pip install pymysql (for connecting MySQL database)----no need

no need flask-sqlalchemy, flask-migrate,pymysql, because we use mongoDB now rather than MySQL
pip install pymongo[srv]

pip isntall python-dotenv

pip install flask-wtf

pip install email-validator

pip install passlib
hashing password when signing up




notes: 
in cmd/terminal, path: D:\life6\projectCode\gradio-python-client\queryAppViaAPi-Temp>
    flask db init: 
    initialize a migrations directory.

    flask db migrate: 
    after initializing the migrations directory, this command generates an initial migration script in versions directory.

    flask db upgrade: 
    this command executes upgrade function in the migration script and applies the changes to your database schema. 



Udemy course: 
https://github.com/tecladocode/web-dev-bootcamp/tree/master/curriculum/section14/lectures/18_user_logout_in_flask_app/end/movie_library

design and export logo.svg from figma.com

02.04.2024
created a custom mouse cursor : https://www.youtube.com/watch?v=UMdvufdewD8 

03.04.2024
MongoDB:
create database user: username:ying password:3170317019
choose connection method: compass
download mongoDB Compass, copy the connection string, then open MongoDB Compass
mongodb+srv://ying:3170317019@generate-story.zof2usz.mongodb.net/
Error: connect ETIMEDOUT 54.77.205.20:27017
don't need to connect with string(mongodb+srv://......), I've download MongoDB in local, so just connect mongodb://localhost:27017

pip install pymongo[srv]
[srv] here, it will also install some extra package that we need 


04.04.2024
The JInjia environment and rendering context
the environment is available in all rendered templates
the rendering context is available on the currently-rendered template

08.04.2024
install jija extension
adding footer
toggle dark mode
create a form with WTForms

09.04.2024
error: 
Bad Request
The browser (or proxy) sent a request that this server could not understand.

10.04.2024
mongoDB Error: connect ECONNREFUSED 127.0.0.1:27017
open task manager -- see if MongoDB database server is running or not; if not, then click start.
https://www.bilibili.com/video/BV1rG4y1e7ro/?spm_id_from=333.337.search-card.all.click&vd_source=4e12efea21202d4bc8f665866b1556c8 

there are some errors with image file code while uploading, see
https://flask-wtf.readthedocs.io/en/1.2.x/form/#file-uploads

11.4.2024
how to display image on webpage
GET /uploads/happy-girl-blue-sky-17121618.jpg HTTP/1.1" 404 -

12.4.2024
working with index.html and it's css(stories.css)

15.4.2024
"GET /uploads/happy-girl-blue-sky-17121618.jpg HTTP/1.1" 404 -
solution: try to move uploads folder under static folder: 

error: 
"GET /static/D:\\life6\\projectCode\\gradio-python-client\\queryAppViaApi-flaskApp-MongoDB-3\\story_generator\\static\\uploads\\happy-girl-blue-sky-17121618.jpg HTTP/1.1" 404 -
try to change image path when store into database:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    STATIC_DIR = os.path.join(BASE_DIR, 'static')
    TEMPLATE_DIR = os.path.join(BASE_DIR, 'templates')
    UPLOAD_IMAGES_DIR = os.path.join(STATIC_DIR, 'uploads/images') # move UPLOAD_IMAGES_DIR under static folder
    app.config['UPLOAD_IMAGES_DIR'] = UPLOAD_IMAGES_DIR # use app.config directly instead of current_app.config


error: Not allowed to load local resource: file:///D:/life6/projectCode/gradio-python-client/queryAppViaApi-flaskApp-MongoDB-3/story_generator/static/uploads/happy-girl-blue-sky-17121618.jpg

to solve error: Not allowed to load local resource: file:///D:/life6/projectCode/gradio-python-client/queryAppViaApi-flaskApp-MongoDB-3/story_generator/static/uploads/happy-girl-blue-sky-17121618.jpg
    path = 'uploads/images'
    image_database_path = os.path.join(path, filename)   
    img src="{{ url_for('static', filename=story.image) }}" alt="{{ story.image }}"
this way not work !!!!! "GET /static/uploads/images\\happy-girl-blue-sky-17121618.jpg HTTP/1.1" 404 -"
every step associaed with image will has error -_-

diaplay successfully:
image = filename in route.py
img src="{{ url_for('static', filename='uploads/images/' + story.image) }}" alt="{{ story.image }}" in index.html

16.04.2024
RegisterForm

17.04.2024
LoginForm

19.04.2024
add DELETE route

14.05.2024
ValueError: Unsupported protocol: sse_v3
127.0.0.1 - - [14/May/2024 12:20:56] "POST /create HTTP/1.1" 500 -
solution: pip install gradio --upgrade

16.05.2024
https://flask-wtf.readthedocs.io/en/1.2.x/form/#:~:text=Similarly%2C%20you%20can%20use%20the,otherwise%20data%20will%20be%20None%20.&text=Remember%20to%20set%20the%20enctype,files%20will%20be%20empty.




