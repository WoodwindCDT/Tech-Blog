# **Tech-Blog**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  
  ## Description 
  
  This project was created for Nerds alike to post about the newest advancements in technology, space, video-games, coding, and etc. It includes secure and simple sign-up/login requirements to post, a personal dashboard, simple and fast post creation/commenting/deletion/editing. Enjoy :)
  
  ## Table of contents
  
  - [Description](#Description)
  - [Deployed](#Deployed_Application)
  - [Usage](#Usage)
  - [License](#License)
  - [More](#Questions)
  
  
  ## Deployed_Application
  This Project was deployed using [Heroku](https://www.heroku.com/) and uses [JawsDB](https://devcenter.heroku.com/articles/jawsdb#:~:text=JawsDB%20is%20an%20add%2Don,Facebook%2C%20Twitter%2C%20and%20Youtube.).
  > https://limitless-falls-47067.herokuapp.com/
  
  ## Usage
  
  > To Edit/Guide from the project you may want to use [**Node.js**](https://nodejs.org/en/), a [**Command**](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) terminal to initialize the App, and a Root Password for [**SQL**](https://dev.mysql.com/doc/) to access DB Usage.

Example:
- **Must** have a MySQL Password
- cd desktop
- cd Tech-Blog
- npm install (to install all dependencies)
- Create a .env in the root directory 
- Copy and Paste >
DB_NAME=''
DB_USER=''
DB_PW=''
>> **Must** type your MySQL db Name, Username, and Password between the **''** at DB_NAME='' && DB_USER='' && DB_PW=''
- npm start (to initialize)
- Type in your brower the localHost server address & complete the url with the desired endpoints
    > EX: http://localhost:3001/

  ## Questions?

  Account: **WoodwindCDT**

  Email: woodwind.turbeville@gmail.com

  More: [Checkout my Work](https://github.com/WoodwindCDT)

  Used Dependencies :

    - [bcrypt](https://www.npmjs.com/package/bcrypt): "^5.0.0",

    - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize): "^7.0.4",

    - [express-handlebars](https://www.npmjs.com/package/express-handlebars): "^5.2.0",

    - [express-session](https://www.npmjs.com/package/express-session): "^1.17.1",

    - [dotenv](https://www.npmjs.com/package/dotenv): "^8.2.0",

    - [express](https://www.npmjs.com/package/express): "^4.17.1",

    - [sequelize](https://www.npmjs.com/package/sequelize): "^6.3.5",

    - [mysql2](https://www.npmjs.com/package/mysql2): "^2.2.5"

  ## License
  This Project is licensed via MIT