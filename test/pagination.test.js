const path = require("path"); // to build directory path for using tickets.json file as fake data for testing
const expect = require("chai").expect; // require Chai library
const fileSystem = require("fs"); // to read a json file and parse it to object data

const Pagination = require("../modules/pagination.js");

//use the data from tickets.json as the fake data to run testing
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

const testTickets = loadtestData(); //load test data from tickets.json
const testPagination = new Pagination(testTickets); //create a test pagination instance from Pagination class

//test Pagination class methods
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
    it("should return an error message if already on the first page", () => {
      const expectedPageNumber = 1;
      testPagination.currentPageNumber = 1;
      testPagination.goToPreviousPage();
      expect(testPagination.currentPageNumber).to.equal(expectedPageNumber);
    });
  });

  //testing class method goToNextPage()
  describe("goToNextPage", () => {
    it("should return next page number", () => {
      const expectPageNumber = testPagination.currentPageNumber;
      testPagination.goToNextPage();
      expect(testPagination.currentPageNumber).to.equal(expectPageNumber + 1);
    });
    it("should return an error message if already on the last page", () => {
      const expectedPageNumber = 7;
      testPagination.currentPageNumber = 7;
      testPagination.goToNextPage();
      expect(testPagination.currentPageNumber).to.equal(expectedPageNumber);
    });
  });

  //testing class method goToPage()
  describe("goToPage", () => {
    it("should return a page", () => {
      const expectedPageNumber = 5;
      testPagination.goToPage(5);
      expect(testPagination.currentPageNumber).to.equal(expectedPageNumber);
    });
    it("should display an error if the page number passed in does not exist", () => {
      const notExpectedPageNumbers = [-5, 0, 8, 1000, "hi"];
      testPagination.goToPage();
      notExpectedPageNumbers.forEach(element => {
        expect(testPagination.currentPageNumber).to.not.equal(element);
      });
    });
  });

  //testing class method getPageTickets()
  describe("getPageTickets", () => {
    it("should return a list of 15 tickets for the first 6 pages", () => {
      const expectPageNumber = Math.ceil(Math.random() * 6);
      testPagination.currentPageNumber = expectPageNumber;
      testPagination.getPageTickets();
      expect(testPagination.getPageTickets().length).to.equal(15);
    });
    it("should return a list of 10 tickets for the last page", () => {
      const expectPageNumber = 7;
      testPagination.currentPageNumber = expectPageNumber;
      testPagination.getPageTickets();
      expect(testPagination.getPageTickets().length).to.equal(10);
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
