require("dotenv").config();
const express = require("express");
const connection = require("./src/database");

connection.authenticate();
connection.sync({ alter: true });
console.log("Connection has been established succesfully.");

const app = express();
app.use(require("./src/routes/patient"));
app.use(require("./src/routes/doctor"));
app.use(require("./src/routes/nurse"));
app.use(require("./src/routes/medicalCare"));

app.listen(3333, () => {
  console.log("Projeto online");
});
