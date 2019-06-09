const path = require("path");
const expect = require("chai").expect;
// const app = require("../app");
const fileSystem = require("fs");

const Pagination = require("../../modules/pagination.js");

//use the data from tickets.json to run testing
const loadtestData = () => {
  const testTicketsData = fileSystem.readFileSync(
    path.join(__dirname + "/tickets.json"),
    (error, data) => {
      if (error) throw error;
      return data;
    }
  );
  return JSON.parse(testTicketsData).tickets;
};

const testTickets = loadtestData();
const testPagination = new Pagination(testTickets);

// console.log(testTickets);

describe("Pagination", () => {
  //testing class method goToFirstPage()
  describe("goToFirstPage", () => {
    it("should return current page number equal to 1", () => {
      testPagination.goToFirstPage();
      expect(testPagination.currentPageNumber).to.equal(1);
    });
    it("should not return current page number other than 1", () => {
      testPagination.goToFirstPage();
      expect(testPagination.currentPageNumber).to.not.equal(-1);
      expect(testPagination.currentPageNumber).to.not.equal(0);
    });
  });

  //testing class method goToLastPage()
  describe("goToLastPage", () => {
    it("should return current page number equal to 7", () => {
      testPagination.goToLastPage();
      expect(testPagination.currentPageNumber).to.equal(7);
    });
    it("should not return current page number other than 7", () => {
      testPagination.goToLastPage();
      expect(testPagination.currentPageNumber).to.not.equal(null);
      expect(testPagination.currentPageNumber).to.not.equal(1);
      expect(testPagination.currentPageNumber).to.not.equal(8);
    });
  });

  //testing class method goToPreviousPage()
  describe("goToPreviousPage", () => {
    it("should return previous page number", () => {
      const expectPageNumber = testPagination.currentPageNumber;
      testPagination.goToPreviousPage();
      expect(testPagination.currentPageNumber).to.equal(expectPageNumber - 1);
    });
    it("should set the value of current page number to 0", () => {
      testPagination.currentPageNumber = 1;
      testPagination.goToPreviousPage();
      expect(testPagination.currentPageNumber).to.equal(0);
    });
  });

  //testing class method goToNextPage()
  describe("goToNextPage", () => {
    it("should return next page number", () => {
      const expectPageNumber = testPagination.currentPageNumber;
      testPagination.goToNextPage();
      expect(testPagination.currentPageNumber).to.equal(expectPageNumber + 1);
    });
    it("should set the value of current page number to 8", () => {
      testPagination.currentPageNumber = 7;
      testPagination.goToNextPage();
      expect(testPagination.currentPageNumber).to.equal(8);
    });
  });

  //testing class method goToPage()
  describe("goToPage", () => {
    it("should return a page", () => {
      const expectPageNumber = 5;
      testPagination.goToPage(5);
      expect(testPagination.currentPageNumber).to.equal(expectPageNumber);
    });
    it("should not display a page if the page number passed in does not exist", () => {
      const notExpectedPageNumbers = [-5, 0, 8, 1000, "hi"];
      testPagination.goToPage();
      notExpectedPageNumbers.forEach(element => {
        expect(testPagination.currentPageNumber).to.not.equal(element);
      });
    });
  });

  //testing class method displayPage()
  describe("getPageTickets", () => {
    it("should return a list of 15 tickets", () => {
      const expectPageNumber = 2;
      testPagination.currentPageNumber = expectPageNumber;
      testPagination.getPageTickets();
      expect(testPagination.getPageTickets().length).to.equal(15);
    });
    it("should return a list of tickets of that page number", () => {
      const expectPageNumber = 2;
      testPagination.currentPageNumber = expectPageNumber;
      const pageTwoOfTestTickets = testTickets.slice(15, 30);
      testPagination.getPageTickets();
      expect(testPagination.getPageTickets()).to.deep.equal(
        pageTwoOfTestTickets
      );
    });
  });
});
