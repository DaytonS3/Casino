
const express = require("express");
const knex = require("knex");

const cohortRouter = require("./Routers/cohortRouter");


const server = express();

server.use(express.json());

server.use("/api/cohorts", cohortRouter);

module.exports = server;