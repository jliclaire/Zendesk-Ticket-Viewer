// npm dotenv to handle credential info
require("dotenv").config();

//import functions to display menu and display page layout
const display = require("./display.js");

// npm axios to get API data from Zendesk account
const axios = require("axios");

const url = {
  method: "get",
  url: "https://jingli.zendesk.com/api/v2/tickets.json",
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }
};

// create a Data class to receive tickets and store ticketsData
module.exports = class Data {
  ticketsData() {
    if (this.tickets === undefined) {
      process.exit();
    } else {
      return this.tickets;
    }
  }

  async getTicketsData() {
    try {
      const response = await axios(url);
      this.tickets = response.data.tickets;
      return this.tickets;
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === 401) {
        const errorMessage =
          "You are unauthorized. Please check your login credentials!";
        display.formatErrorDisplay(errorMessage);
      } else if (statusCode === 404) {
        const errorMessage = "The server can not find requested resource!";
        display.formatErrorDisplay(errorMessage);
      } else if (statusCode === 503) {
        const errorMessage =
          "Sorry, looks like we are having some server issues! Please try again later.";
        display.formatErrorDisplay(errorMessage);
      } else {
        const errorMessage = `${error.message}: ${error.response.statusText}`;
        display.formatErrorDisplay(errorMessage);
      }
    }
  }
};
