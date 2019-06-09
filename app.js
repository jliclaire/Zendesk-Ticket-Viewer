// npm readline-sync to take user input from command line
const readline = require("readline-sync");

//import functions to display menu and display page layout
const display = require("./display.js");

// import modules class Data from data.js
const Data = require("./data.js");

// import modules class Pagination from data.js
const Pagination = require("./pagination.js");

//create an instance of the data came back from API
let dataSet = new Data();

let runningMainMenu = true;

const selectFromMainMenu = async () => {
  display.showMainMenu();
  console.log("\n...Loading Tickets ...\n");
  await dataSet.getTicketsData();
  allTickets = await dataSet.ticketsData();

  page = new Pagination(allTickets);

  while (runningMainMenu) {
    let mainMenuSelection = display.getMainMenuSelection();

    switch (mainMenuSelection) {
      case "1":
        page.displayPage();
        findThePage();
        break;
      // case "2":
      //   const ticketID = display.getIndividualTicketID();
      //   page.displayIndividualTicket(ticketID);
      //   break;
      case "2":
        console.log("You have successfully quited the program");
        runningMainMenu = false;
        break;
      default:
        const errorMessage = `"${mainMenuSelection}" is not a valid selection. Please select from the menu`;
        display.showMainMenu(errorMessage);
    }
  }
};

let searchingPage = true;
const findThePage = () => {
  while (searchingPage) {
    display.showViewTicketOptions();
    let viewTicketsSelection = display.getViewTicketOptions();

    switch (viewTicketsSelection) {
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
        console.log("You have successfully quited the program");
        searchingPage = false;
        runningMainMenu = false;
        break;
      default:
        const errorMessage = `"${viewTicketsSelection}" is not a valid selection. Please select from the menu`;
        display.formatErrorDisplay(errorMessage);
    }
  }
};

selectFromMainMenu();

module.exports = { selectFromMainMenu };
