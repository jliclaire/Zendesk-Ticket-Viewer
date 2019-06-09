//import functions to display menu and display page layout
const display = require("./display.js");

module.exports = class Pagination {
  constructor(tickets, pageSize = 15) {
    this.tickets = tickets;
    if (this.tickets === []) {
      const errorMessage = `No tickets received!`;
      display.formatErrorDisplay(errorMessage);
    } else {
      this.pageSize = pageSize;
      this.currentPageNumber = 1;
      this.lastPageNumber = Math.ceil(this.tickets.length / this.pageSize);
    }
  }

  goToFirstPage() {
    this.currentPageNumber = 1;
    this.displayPage();
  }

  goToLastPage() {
    this.currentPageNumber = this.lastPageNumber;
    this.displayPage();
  }

  goToPreviousPage() {
    if (this.currentPageNumber === 1) {
      const errorMessage = `You are already on the first page!`;
      display.formatErrorDisplay(errorMessage);
    } else {
      this.currentPageNumber--;
      this.displayPage();
    }
  }

  goToNextPage() {
    if (this.currentPageNumber === 7) {
      const errorMessage = `You are already on the last page!`;
      display.formatErrorDisplay(errorMessage);
    } else {
      this.currentPageNumber++;
      this.displayPage();
    }
  }

  goToPage(pageNumber) {
    if (pageNumber > 0 && pageNumber <= this.lastPageNumber) {
      this.currentPageNumber = pageNumber;
      this.displayPage();
    } else {
      const errorMessage = `Requested page number "${pageNumber}" does not exist!`;
      display.formatErrorDisplay(errorMessage);
    }
  }

  getPageTickets() {
    const indexOfTopListItem = (this.currentPageNumber - 1) * 15;
    const indexOfBottomListItem = indexOfTopListItem + this.pageSize;
    const ticketsOfThePage = this.tickets.slice(
      indexOfTopListItem,
      indexOfBottomListItem
    );
    return ticketsOfThePage;
  }

  displayPage() {
    display.formatTicketListHeader();
    const pageTickets = this.getPageTickets();
    pageTickets.forEach(ticket => {
      display.formatTicketList(ticket);
    });
    display.formatCurrentPageNumber(this.currentPageNumber);
  }

  displayIndividualTicket(id) {
    const IntegerID = Number(id);
    if (IntegerID >= 1 && IntegerID <= this.tickets.length) {
      const ticketToView = this.tickets.find(ticket => ticket.id === IntegerID);
      display.formatIndividualTicketDisplay(ticketToView);
    } else {
      const errorMessage = `Requested ticket ID "${id}" does not exist! `;
      display.formatErrorDisplay(errorMessage);
    }
  }
};
