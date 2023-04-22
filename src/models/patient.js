const Sequelize = require("sequelize");
const connection = require("../database");

const Patient = connection.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
  },
  birth_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  telephone: {
    type: Sequelize.STRING,
  },
  emergency_contact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  list_of_allergies: {
    type: Sequelize.STRING,
  },
  list_of_specific_care: {
    type: Sequelize.STRING,
  },
  health_insurance: {
    type: Sequelize.STRING,
  },
  service_status: {
    type: Sequelize.ENUM(
      "AGUARDANDO_ATENDIMENTO",
      "EM_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO"
    ),
  },
  full_service: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Patient;
