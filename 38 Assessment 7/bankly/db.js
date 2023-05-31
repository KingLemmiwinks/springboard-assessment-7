"use strict";
/** Database setup for bankly. */
const { Client } = require("pg");

let db = new Client({
  host: "localhost",
  database: "jobly",
  password: "3Turtlz6!",
});

db.connect();

module.exports = db;
