# Project Title

### Zendesk Ticket Viewer

# Project Description

A nodejs CLI application that queries Zendesk API to get a json file of 100 support tickets. The application will display all the tickets as well as to let the user view one individual ticket.

![](./docs/screenshot.jpg)

# Tech Tools Used

- node.js
- dotenv
- axios
- readline-sync
- mocha & chai

# NodeJS Installation

version: v10.15.3

refer to the link to install node.js https://nodejs.org/en/download/

initialize application run

```
npm init
```

# Development Setup

- ### **dotenv**

  A zero-dependency module that loads environment variables from a .env file. Install dotenv to keep credentials from uploading to GitHub.

  _install with npm_

  ```
  npm install dotenv
  ```

  **To run this application, a .env file needs to be setup in the root directory with the authentication credentials**

* ### **axios**

  Used to make http get request from node.js. axios automatic transforms for JSON data.

  _install with npm_

  ```
  npm install axios
  ```

* ### **readline-sync**

  Used to interact with the user via a console. It displays a query to the user, then return the input from the user after it has been typed and the Enter key was pressed.

  _install with npm_

  ```
  npm install readline-sync
  ```

* ### **Mocha & Chai**

  Mocha is a testing framework and Chai is an assertion library. Install Mocha and Chai as devDependencies.

  _install with npm_

  ```
  npm install mocha chai --save-dev
  ```

# Running the tests

To run the tests

```
npm run test
```

# How to use?

#### Run application

```
node app.js
```

The application will start with the default to display the list of the first 15 tickets. At the bottom of the list, a menu with seven options will show as well.

![](./docs/menu.jpg)

#### Pagination options

- 0: to go back to current page. afer viewing a single ticket or after an error message display, a user can use this option to go back to the page they were on before directed.
- 1: to go to the first page
- 2: to go to the last page
- 3: to go to previous page
- 4: to go to the next page
- 5: to go to a page that the user specified

#### View an individual ticket option

- 6: to view a ticket. the console will be cleared to display this ticket. To go back to the current page select option 0

#### Leave the program option

- 7: select to terminate the program.

#### Error Handling - An error will occur in below situations:

- when a user fails to select an option from the default menu
- when a user requests a ticket or page that is outside the bounds of the tickets array
- when a user tried to go to a page that does not exit
- when a user tried to view a ticket that does not exit

when above user activities occured, an error message will be displayed with the corresponding error contents on top of the console. To go back to the tickets list, select option 0 to go back to current page.

# addtional informaton

- The application has used async/await. It is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers.

# Author

Jing Li - jingli.claire@gmail.com
