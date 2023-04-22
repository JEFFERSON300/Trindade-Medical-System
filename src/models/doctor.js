const Sequelize = require("sequelize");
const connection = require("../database");

const Doctor = connection.define("doctor", {
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
  educational_institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  crm_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clinical_specialization: {
    type: Sequelize.ENUM(
      "CLINICO_GERAL",
      "ANESTESISTA",
      "DERMATALOGISTA",
      "GINECOLOGISTA",
      "NEUROLOGIA",
      "PEDIATRIA",
      "PSIQUIATRIA",
      "ORTOPEDIA"
    ),
    allowNull: false,
  },
  system_status: {
    type: Sequelize.ENUM("ATIVO", "INATIVO"),
    defaultValue: "ATIVO",
  },
  full_service_carried_out: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Doctor;
