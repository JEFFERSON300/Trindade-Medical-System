const express = require("express");
const routerDoctor = express.Router();

const createDoctor = require("../controllers/Doctor/createDoctor");
const deleteDoctor = require("../controllers/Doctor/deleteDoctor");
const findDoctorById = require("../controllers/Doctor/findDoctorById");
const findDoctor = require("../controllers/Doctor/findDoctor");
const updateDoctor = require("../controllers/Doctor/updateDoctor");
const updateStatusDoctor = require("../controllers/Doctor/updateStatusDoctor");

routerDoctor.use(express.json());
routerDoctor.post("/api/medicos", createDoctor);
routerDoctor.put("/api/medicos/:id", updateDoctor);
routerDoctor.put("/api/medicos/:id/status", updateStatusDoctor);
routerDoctor.get("/api/medicos", findDoctor);
routerDoctor.get("/api/medicos/:id", findDoctorById);
routerDoctor.delete("/api/medicos/:id", deleteDoctor);

module.exports = routerDoctor;
