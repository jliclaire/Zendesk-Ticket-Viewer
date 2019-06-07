//import functions to display menu and display page layout
const display = require("./display.js");

module.exports = class Pagination {
  constructor(tickets, pageSize = 15) {
    this.tickets = tickets;
    if (this.tickets === []) {
      console.log("There is no tickets!");
    } else {
      this.pageSize = pageSize;
      this.currentPageNumber = 1;
      this.lastPageNumber = Math.ceil(this.tickets.length / this.pageSize);
    }
  }

  goToFirstPage() {
    this.currentPageNumber = 1;
  }

  goToLastPage() {
    this.currentPageNumber = this.lastPageNumber;
  }

  goToPreviousPage() {
    if (this.currentPageNumber === 1) {
      console.log("You are already on the first page!");
    }
    this.currentPageNumber--;
  }

  goToNextPage() {
    if (this.currentPageNumber === 7) {
      console.log("You are already on the last page!");
    }
    this.currentPageNumber++;
  }

  goToPage(pageNumber) {
    if (
      pageNumber < 1 ||
      pageNumber > this.lastPageNumber ||
      typeof pageNumber !== "number"
    ) {
      console.log(`Request page number "${pageNumber}" does not exist! `);
    }
    this.currentPageNumber = pageNumber;
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
    console.clear();
    display.formatTicketListHeader();
    const pageTickets = this.getPageTickets();
    pageTickets.forEach(ticket => {
      display.formatTicketList(ticket);
    });
  }

  displayTicket(id) {
    const ticketToView = this.tickets.find(ticket => {
      console.log("ticket");
      console.log(ticket);
      return ticket.id === id;
    });
    display.formatTicketListHeader();
    display.formatTicketList(ticketToView);
  }
};
