//import functions from display.js to display error messages and console layout
const display = require("./display.js");

// function to display all available options for user to select.
const runMenu = (runningMenuStatus, pagination) => {
  // when the application is running, keep showing users the menu to select
  while (runningMenuStatus) {
    display.showViewTicketOptions(); // display the menu in console
    let userSelection = display.getViewTicketOptions(); // get user selection input and store it
    switch (userSelection) {
      case "0":
        // an option for the user to go back to their current page after an error message occured
        //or after viewing an individual ticket
        pagination.displayPage();
        break;
      case "1":
        pagination.goToFirstPage(); // to view the first page
        break;
      case "2":
        pagination.goToLastPage(); // to view the last page
        break;
      case "3":
        pagination.goToPreviousPage(); // to view the previous page
        break;
      case "4":
        pagination.goToNextPage(); // to view the next page
        break;
      case "5":
        const goToPageNumber = display.getGoToPageNumber(); // get requested page number from the user
        pagination.goToPage(goToPageNumber); // o view a specific page
        break;
      case "6":
        const ticketID = display.getIndividualTicketID(); // get requested ticket ID from the user
        pagination.displayIndividualTicket(ticketID); // to view an individual ticket
        break;
      case "7":
        display.logoutProgramMessage(); // display a confirmation message when the user logged out the program
        runningMenuStatus = false; // set the running status to false so that the while loop will stop. program will quit
        break;
      default:
        // display an error message if user's selection input is not from the menu
        const errorMessage = `"${userSelection}" is not a valid selection. Please select one from below menu!`;
        display.formatErrorDisplay(errorMessage);
    }
  }
};

module.exports = { runMenu }; // export runMenu funtion for app.js to run
