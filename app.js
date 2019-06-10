//import display.js from modules to display menu, error messages and console layout
const display = require("./modules/display.js");

// import Data class from modules to get tickets data from API request
const Data = require("./modules/data.js");

// import Pagination class from modules to display tickets list and individual ticket
const Pagination = require("./modules/pagination.js");

const runTicketViewer = async () => {
  display.loadingTicketsMessage(); // display loading data message to user

  const dataSet = new Data(); //create an instance of the data came back from API
  await dataSet.getTicketsData();
  allTickets = dataSet.ticketsData();

  const page = new Pagination(allTickets);
  page.displayPage();

  let runningMenu = true;
  while (runningMenu) {
    display.showViewTicketOptions();
    let userSelection = display.getViewTicketOptions();
    switch (userSelection) {
      case "0":
        page.displayPage();
        break;
      case "1":
        page.goToFirstPage();
        break;
      case "2":
        page.goToLastPage();
        break;
      case "3":
        page.goToPreviousPage();
        break;
      case "4":
        page.goToNextPage();
        break;
      case "5":
        const goToPageNumber = display.getGoToPageNumber();
        page.goToPage(goToPageNumber);
        break;
      case "6":
        const ticketID = display.getIndividualTicketID();
        page.displayIndividualTicket(ticketID);
        break;
      case "7":
        display.logoutProgramMessage();
        runningMenu = false;
        break;
      default:
        const errorMessage = `"${userSelection}" is not a valid selection. Please select one from below menu!`;
        display.formatErrorDisplay(errorMessage);
    }
  }
};

// run the application
runTicketViewer();
