//import display.js from modules to display menu, error messages and console layout
const display = require("./modules/display.js");

// import Data class from modules to get tickets data from API request
const Data = require("./modules/data.js");

// import Pagination class from modules to display tickets list and individual ticket
const Pagination = require("./modules/pagination.js");

// import runMenu function from modules to display viewing options
const menu = require("./modules/menu.js");

const runTicketViewer = async () => {
  display.loadingTicketsMessage(); // display loading data message to user

  const dataSet = new Data(); //create an instance of the Data class
  await dataSet.getTicketsData(); // wait for data get back from API
  allTickets = dataSet.ticketsData(); // store all tickets data

  const page = new Pagination(allTickets); // create an instance of the pagination class
  page.displayPage(); // default display the list of the first 15 tickets

  let runningMenu = true; // running the selection menu while the value of this variable is true
  menu.runMenu(runningMenu, page); // display to users the options to select. pass pagination class method with all the tickets data
};

// run the application
runTicketViewer();
