const Sequelize = require("sequelize");
const connection = require("../database");
const Patient = require("./patient");
const Doctor = require("./doctor");

const MedicalCare = connection.define("medical_care", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  doctor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  patient_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

MedicalCare.belongsTo(Doctor);
MedicalCare.belongsTo(Patient);
module.exports = MedicalCare;
