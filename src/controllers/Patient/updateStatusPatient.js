const Patient = require("../../models/patient");

async function updateStatusPatient(req, res) {
  try {
    const { service_status } = req.body;

    if (
      service_status !== "AGUARDANDO_ATENDIMENTO" &&
      service_status !== "EM_ATENDIMENTO" &&
      service_status !== "ATENDIDO" &&
      service_status !== "NAO_ATENDIDO"
    ) {
      return res.status(400).json({
        message:
          "Dados inválidos. São permitidos apenas: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO",
      });
    }

    const serviceinDatabase = await Patient.findByPk(req.params.id);

    if (!serviceinDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    serviceinDatabase.service_status = service_status;
    serviceinDatabase.save();
    res.status(200).json(serviceinDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = updateStatusPatient;
