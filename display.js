// npm readline-sync to take user input from command line
const readline = require("readline-sync");

//format to display error message on top of the page
const formatErrorDisplay = (error = "") => {
  if (error !== "") {
    console.clear();
    console.log(
      "==========================================================================================="
    );

    console.log(`!!!ERROR: ${error}`);
    console.log(
      "===========================================================================================\n"
    );
  }
};

//format to display the ticket list header
const formatTicketListHeader = () => {
  console.clear();
  console.log(` Ticket_ID | Ticket_Status | Ticket_Subject   \n`);
};

//format to display the ticket subjects
const formatTicketList = ticket => {
  console.log(
    `     ${ticket.id}     |     ${ticket.status}      | ${ticket.subject}\n`
  );
};

// format to display page number under the list
const formatCurrentPageNumber = pageNumber => {
  console.log(
    `************************************************Page ${pageNumber}*********************************************************\n`
  );
};

//format to display an individual ticket
const formatIndividualTicketDisplay = ticket => {
  console.clear();
  console.log(
    "***************************************************************************************************************************"
  );
  console.log(`
  ID: ${ticket.id}\n
  Tags: ${ticket.tags}\n
  Subject: ${ticket.subject}\n
  Description: ${ticket.description}
  `);
  console.log(
    "***************************************************************************************************************************"
  );
};

const showMainMenu = (error = "") => {
  console.clear();
  formatErrorDisplay(error);
  console.log("************Ticket Viewer**************");
  console.log("Please choose one from below menu ");
  console.log("1. View tickets\n2 Quit");
};

const showViewTicketOptions = (error = "") => {
  formatErrorDisplay(error);
  console.log("Select a page to display or select a ticket to view: ");
  console.log(
    "1. First Page  2. Last Page  3. Previous Page  4. Next Page  5. Go to a page  6. View a ticket  7. Quit the program"
  );
  console.log(
    "***************************************************************************************************************************"
  );
};

const getViewTicketOptions = () => {
  return readline.question("Select =>");
};

const getMainMenuSelection = () => {
  return readline.question(
    "Please choose one from the above menu (1 or 2)\n=> "
  );
};

const getIndividualTicketID = () => {
  return readline.question("\nSelect a ticket to view:\n=> ");
};

const getGoToPageNumber = () => {
  return readline.question("\nSelect a page to view:\n=> ");
};

module.exports = {
  formatErrorDisplay,
  showMainMenu,
  formatTicketListHeader,
  formatTicketList,
  getViewTicketOptions,
  getMainMenuSelection,
  showViewTicketOptions,
  formatIndividualTicketDisplay,
  formatCurrentPageNumber,
  getIndividualTicketID,
  getGoToPageNumber
};
