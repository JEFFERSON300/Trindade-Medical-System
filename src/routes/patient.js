const express = require("express");
const routerPatient = express.Router();

const createPatient = require("../controllers/Patient/createPatient");
const deletePatient = require("../controllers/Patient/deletePatient");
const findPatientById = require("../controllers/Patient/findPatientById");
const findPatient = require("../controllers/Patient/findPatients");
const updatePatient = require("../controllers/Patient/updatePatient");
const updateStatusPatient = require("../controllers/Patient/updateStatusPatient");

routerPatient.use(express.json());
routerPatient.post("/api/pacientes", createPatient);
routerPatient.put("/api/pacientes/:id", updatePatient);
routerPatient.put("/api/pacientes/:id/status", updateStatusPatient);
routerPatient.get("/api/pacientes", findPatient);
routerPatient.get("/api/pacientes/:id", findPatientById);
routerPatient.delete("/api/pacientes/:id", deletePatient);

module.exports = routerPatient;
