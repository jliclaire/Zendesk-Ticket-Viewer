// import modules class Data from data.js
const Data = require("./data.js");

// npm readline-sync to take user input from command line
const readline = require("readline-sync");

//create an instance of the data back from API
let dataSet = new Data();

const showMenu = () => {
  console.clear();
  console.log("************Ticket Viewer**************");
  console.log("Please choose one from below menu (1, 2 or 3)");
  console.log("1. View all tickets\n2. View one ticket\n3. Quit");
};

const userSelection = async () => {
  const selection = readline.question(
    "Please choose one from the above menu\n=> "
  );
  await dataSet.getTicketsData();
  allTickets = dataSet.ticketsData();

  displayAllTickets(allTickets);
};

const displayAllTickets = arr => {
  console.clear();
  newArr = arr.slice(0, 9);
  console.log(`Ticket_ID | Ticket_Status | Ticket_Subject   \n`);
  newArr.forEach(ticket => {
    console.log(
      `     ${ticket.id}     |    ${ticket.status}      | ${ticket.subject}\n`
    );
  });
};

// getTicketsData();
showMenu();

userSelection();

module.exports = { displayAllTickets };
