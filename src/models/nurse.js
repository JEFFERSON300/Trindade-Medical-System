const Sequelize = require("sequelize");
const connection = require("../database");

const Nurse = connection.define("nurse", {
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
  cofen_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
