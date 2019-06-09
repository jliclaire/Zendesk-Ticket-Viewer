// npm readline-sync to take user input from command line
const readline = require("readline-sync");

//format to display error message on top of the page
const formatErrorDisplay = (error = "") => {
  if (error !== "") {
    console.clear();
    console.log(
      "======================================================================================================"
    );

    console.log(`!!!ERROR: ${error}`);
    console.log(
      "======================================================================================================\n"
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

const showViewTicketOptions = (error = "") => {
  formatErrorDisplay(error);
  console.log("Select a page to display or select a ticket to view:\n ");
  console.log(
    "0. Back to Current Page  1. First Page  2. Last Page  3. Previous Page  4. Next Page  5. Go to a page  6. View a ticket  7. Quit the program"
  );
  console.log(
    "\n*********************************************************************************************************************************************************"
  );
};

const getViewTicketOptions = () => {
  return readline.question("Select =>");
};

const getIndividualTicketID = () => {
  return readline.question("\nSelect a ticket ID to view:\n=> ");
};

const getGoToPageNumber = () => {
  return readline.question("\nSelect a page number to view:\n=> ");
};

const logoutProgramMessage = () => {
  console.log(
    "You have successfully logged out the program. See you next time!"
  );
};

const loadingTicketsMessage = () => {
  console.clear();
  console.log("Welcome!\nTickets are loading ...\n");
};
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
