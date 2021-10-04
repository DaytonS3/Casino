
const express = require("express");
const knex = require("knex");

const busRouter = require("./routers/busrouter");


const server = express();

server.use(express.json());

server.use("/api/bus", busRouter);

module.exports = server;