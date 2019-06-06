const assert = require("chai").assert;
const app = require("../app");

describe("App", () => {
  it("app should return lenght of tickets", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

    assert.equal(app.displayAllTickets(testArray), testArray.length);
  });
});
