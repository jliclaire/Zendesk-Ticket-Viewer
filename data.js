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

// create a Data class to receive tickests and store it in function ticketsData
module.exports = class Data {
  ticketsData() {
    return this.tickets;
  }

  async getTicketsData() {
    try {
      const response = await axios(url);
      this.tickets = response.data.tickets;
      return this.tickets;
    } catch {
      // if response.status =200
      const errorMessage = "No response received!";
      display.formatErrorDisplay(errorMessage);
    }
  }
};
