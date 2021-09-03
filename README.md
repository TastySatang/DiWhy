# Diwhy

Diwhy is a fullstack app that lets users share their diy projects with others.

### Technologies used

   * PostgreSQL
   * Python
   * Flask
   * JavaScript
   * React
   * Redux
   * CSS3
 

[Live Website](https://diwhy.herokuapp.com/)

## Screenshots

*landing page*

![](https://github.com/TastySatang/DiWhy/blob/main/gs/Landing.png)

*user authentications pages*

![](https://github.com/TastySatang/DiWhy/blob/main/gs/login.png)
![](https://github.com/TastySatang/DiWhy/blob/main/gs/signup.png)

*browsing page*

![](https://github.com/TastySatang/DiWhy/blob/main/gs/Projects%20page.png)

*new project creation*

![](https://github.com/TastySatang/DiWhy/blob/main/gs/new%20projects.png)

*project details and comments page*

![](https://github.com/TastySatang/DiWhy/blob/main/gs/Project%20detaisl.png)
![](https://github.com/TastySatang/DiWhy/blob/main/gs/Comments%20section.png)

## Installing

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/TastySatang/DiWhy.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. cd into `react-app` directory.

   ```bash
   npm start
   ```

### Future Features

* Search - search for projects
* User profiles - collection of specific user's shared projects


