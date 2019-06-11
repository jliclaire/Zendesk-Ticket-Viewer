// npm readline-sync to interact with the user by displaying a query to the user and take their input after the Enter key pressed
const readlineSync = require("readline-sync");

// console display layout/format
//format to display error message on top of the page
const formatErrorDisplay = (error = "") => {
  if (error !== "") {
    console.clear();
    console.log(
      "==========================================================================================================="
    );
    console.log(`!!!ERROR: ${error}`);
    console.log(
      "===========================================================================================================\n"
    );
  }
};

//format to display the ticket list header
const formatTicketListHeader = () => {
  console.clear();
  console.log("\n Ticket_ID | Ticket_Status | Ticket_Subject   \n");
};

//format to display the ticket subjects
const formatTicketList = ticket => {
  console.log(
    `     ${ticket.id}     |     ${ticket.status}      | ${ticket.subject}\n`
  );
};

// format to display page number under the list
const formatCurrentPageNumber = (pageNumber, totalPage) => {
  console.log(
    `****************************************  Page ${pageNumber} / ${totalPage}  **********************************************\n`
  );
};

//format to display an individual ticket
const formatIndividualTicketDisplay = ticket => {
  console.clear();
  console.log(
    "\n*********************************************************************************************************************************************************"
  );
  console.log(
    `ID: ${ticket.id}\nTags: ${ticket.tags}\nSubject: ${
      ticket.subject
    }\n\nDescription:\n${ticket.description}`
  );
  console.log(
    "\n*********************************************************************************************************************************************************\n"
  );
};

// format to display the viewing menu
const showViewTicketOptions = (error = "") => {
  formatErrorDisplay(error);
  console.log("Select a page to display or select a ticket to view:\n ");
  console.log(
    "0. <= Go Back  1. << First Page  2. Last Page >>  3. < Previous Page  4. Next Page >  5. Go to a page 6. View a ticket  7. Quit the program"
  );
  console.log(
    "\n*********************************************************************************************************************************************************"
  );
};

// greeting and goodbye message
// display greet the user with a data loading message
const loadingTicketsMessage = () => {
  console.clear();
  console.log("Welcome to Zendesk Ticket Viewer!\nTickets are loading ...\n");
};

// display comfirmation message when the user successfully quit the program
const logoutProgramMessage = () => {
  console.log(
    "You have successfully logged out the program. See you next time!"
  );
};

// interacting with the user
// display q query to let the user select an option, return their input after Entered
const getViewTicketOptions = () => {
  return readlineSync.question("Select =>");
};

// display q query to let the user select a page to view, return their input after Entered
const getGoToPageNumber = () => {
  return readlineSync.question("\nSelect a page number to view:\n=> ");
};

// display q query to let the user select a ticket ID to view, return their input after Entered
const getIndividualTicketID = () => {
  return readlineSync.question("\nSelect a ticket ID to view:\n=> ");
};

// exports module funtions
module.exports = {
  formatErrorDisplay,
  formatTicketListHeader,
  formatTicketList,
  getViewTicketOptions,
  showViewTicketOptions,
  formatIndividualTicketDisplay,
  formatCurrentPageNumber,
  getIndividualTicketID,
  getGoToPageNumber,
  logoutProgramMessage,
  loadingTicketsMessage
};
