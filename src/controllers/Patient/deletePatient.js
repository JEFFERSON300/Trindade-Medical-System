const Patient = require("../../models/patient");

async function deletePatient(req, res) {
  try {
    const patientinDatabase = await Patient.findByPk(req.params.id);

    if (!patientinDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    await Patient.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Paciente deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = deletePatient;
