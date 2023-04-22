const Doctor = require("../../models/doctor");

async function updateStatusDoctor(req, res) {
  try {
    const { system_status } = req.body;

    if (system_status !== "ATIVO" && system_status !== "INATIVO") {
      return res.status(400).json({
        message: "Dados inválidos. São permitidos apenas: ATIVO ou INATIVO",
      });
    }

    const statusInDatabase = await Doctor.findByPk(req.params.id);

    if (!statusInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    statusInDatabase.system_status = system_status;
    statusInDatabase.save();
    res.status(200).json(statusInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = updateStatusDoctor;
