const Nurse = require("../../models/nurse");

async function findNurse(req, res) {
  try {
    const nurses = await Nurse.findAll();
    res.status(200).json(nurses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findNurse;
