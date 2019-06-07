// npm readline-sync to take user input from command line
const readline = require("readline-sync");

const formatErrordisplay = (error = "") => {
  if (error !== "") {
    console.clear();
    console.log(
      "\n==========================================================================================="
    );

    console.log(`!Warning: ${error}`);
    console.log(
      "===========================================================================================\n"
    );
  }
};

const showMainMenu = (error = "") => {
  console.clear();
  formatErrordisplay(error);
  console.log("************Ticket Viewer**************");
  console.log("Please choose one from below menu ");
  console.log("1. View tickets\n2 Quit");
};

const formatTicketListHeader = () => {
  console.clear();
  console.log(` Ticket_ID | Ticket_Status | Ticket_Subject   \n`);
};

const formatTicketList = ticket => {
  console.log(
    `     ${ticket.id}     |     ${ticket.status}      | ${ticket.subject}\n`
  );
};

const showViewTicketOptions = (error = "") => {
  formatErrordisplay(error);
  console.log(
    "***************************************************************************************************************************"
  );
  console.log("Select a page to display or select a ticket to view: ");
  console.log(
    "1. First Page  2. Last Page  3. Previous Page  4. Next Page  5. Go to a page  6. View a ticket  7. Quit the program"
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

module.exports = {
  formatErrordisplay,
  showMainMenu,
  formatTicketListHeader,
  formatTicketList,
  getViewTicketOptions,
  getMainMenuSelection,
  showViewTicketOptions
};
