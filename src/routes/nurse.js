const express = require("express");
const routerNurse = express.Router();

const createNurse = require("../controllers/Nurse/createNurse");
const deleteNurse = require("../controllers/Nurse/deleteNurse");
const findNurseById = require("../controllers/Nurse/findNurseById");
const findNurse = require("../controllers/Nurse/findNurse");
const updateNurse = require("../controllers/Nurse/updateNurse");

routerNurse.use(express.json());
routerNurse.post("/api/enfermeiros", createNurse);
routerNurse.put("/api/enfermeiros/:id", updateNurse);
routerNurse.get("/api/enfermeiros", findNurse);
routerNurse.get("/api/enfermeiros/:id", findNurseById);
routerNurse.delete("/api/enfermeiros/:id", deleteNurse);

module.exports = routerNurse;
