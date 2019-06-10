//import functions from display.js to display error messages and console layout
const display = require("./display.js");

module.exports = class Pagination {
  constructor(tickets, pageSize = 15) {
    this.tickets = tickets; // Array of all tickets
    this.pageSize = pageSize; // Number of tickets to display on each page
    this.currentPageNumber = 1; // Reference to the current page
    // find the maximum number of pages needed to display all tickets
    this.lastPageNumber = Math.ceil(this.tickets.length / this.pageSize);
  }

  // Set the pageNumber to the first page and display it
  goToFirstPage() {
    this.currentPageNumber = 1;
    this.displayPage();
  }

  // Set the pageNumber to the last page and display it
  goToLastPage() {
    this.currentPageNumber = this.lastPageNumber;
    this.displayPage();
  }

  goToPreviousPage() {
    // If a user is on page one then can't go back further, show error message
    if (this.currentPageNumber === 1) {
      const errorMessage = `You are already on the first page!`;
      display.formatErrorDisplay(errorMessage);
    } else {
      // decrement page number count by one and display that page
      this.currentPageNumber--;
      this.displayPage();
    }
  }

  goToNextPage() {
    // If a user is on the last page then can't go forward further, show error message
    if (this.currentPageNumber === this.lastPageNumber) {
      const errorMessage = `You are already on the last page, page# ${
        this.lastPageNumber
      }!`;
      display.formatErrorDisplay(errorMessage);
    } else {
      // increment page number count by one and display that page
      this.currentPageNumber++;
      this.displayPage();
    }
  }

  goToPage(pageNumber) {
    // Convert page number to a number from an expected string input
    const integerPageNumber = Number(pageNumber);
    // Check that the page number is in the bounds
    if (integerPageNumber > 0 && integerPageNumber <= this.lastPageNumber) {
      // if the page number is valid, find and display the requested page
      this.currentPageNumber = integerPageNumber;
      this.displayPage();
    } else {
      // If the page requested is not valid or it is greater than the lastPage or less than 1, show error message
      const errorMessage = `Requested page number "${pageNumber}" does not exist! Please select a page number between 1 and ${
        this.lastPageNumber
      }`;
      display.formatErrorDisplay(errorMessage);
    }
  }

  getPageTickets() {
    // find the start index to slice. One is subtracted to make page line up with the array
    const indexOfTopListItem = (this.currentPageNumber - 1) * 15;
    // find the end index to slice
    const indexOfBottomListItem = indexOfTopListItem + this.pageSize;
    // Get the selected elements from the array and return them
    const ticketsOfThePage = this.tickets.slice(
      indexOfTopListItem,
      indexOfBottomListItem
    );
    return ticketsOfThePage;
  }

  displayPage() {
    display.formatTicketListHeader();
    const pageTickets = this.getPageTickets(); // Get the tickets for the current page
    pageTickets.forEach(ticket => {
      display.formatTicketList(ticket);
    });
    display.formatCurrentPageNumber(
      this.currentPageNumber,
      this.lastPageNumber
    );
  }

  displayIndividualTicket(id) {
    // Convert id to a number from an expected string input
    const integerID = Number(id);
    // Check that the ticket is in the bounds of the tickets array
    if (integerID > 0 && integerID <= this.tickets.length) {
      // if the ticket id is valid, find and display the requested ticket
      const ticketToView = this.tickets.find(ticket => ticket.id === integerID);
      display.formatIndividualTicketDisplay(ticketToView);
    } else {
      // if the ticket id passed is not valid or not within the bounds of the array, display error message
      const errorMessage = `Requested ticket ID "${id}" does not exist! `;
      display.formatErrorDisplay(errorMessage);
    }
  }
};
