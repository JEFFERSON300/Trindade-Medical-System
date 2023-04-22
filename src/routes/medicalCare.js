const express = require("express");
const routerMedicalCare = express.Router();

const medicalCare = require("../controllers/medicalCare");

routerMedicalCare.use(express.json());
routerMedicalCare.post("/api/atendimentos", medicalCare);

module.exports = routerMedicalCare;
