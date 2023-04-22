const Nurse = require("../../models/nurse");

async function deleteNurse(req, res) {
  try {
    const nurseInDatabase = await Nurse.findByPk(req.params.id);

    if (!nurseInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    await Nurse.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Enfermeiro deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = deleteNurse;
