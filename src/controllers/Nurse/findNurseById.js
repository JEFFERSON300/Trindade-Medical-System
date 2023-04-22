const Nurse = require("../../models/nurse");

async function findNurseById(req, res) {
  try {
    const nurseInDatabase = await Nurse.findByPk(req.params.id);

    if (!nurseInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    res.status(200).json(nurseInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findNurseById;
