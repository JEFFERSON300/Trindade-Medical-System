const Doctor = require("../../models/doctor");

async function deleteDoctor(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.params.id);

    if (!doctorInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    await Doctor.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Médico deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = deleteDoctor;
