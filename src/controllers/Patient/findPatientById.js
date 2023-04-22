const Patient = require("../../models/patient");

async function findPatientById(req, res) {
  try {
    const patientinDatabase = await Patient.findByPk(req.params.id);

    if (!patientinDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    res.status(200).json(patientinDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findPatientById;
