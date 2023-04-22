const Patient = require("../../models/patient");

async function findPatient(req, res) {
  try {
    if (req.query.status) {
      const searchPatients = await Patient.findAll({
        where: { service_status: req.query.status },
      });

      return res.status(200).json(searchPatients);
    }

    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findPatient;
