const Nurse = require("../../models/nurse");

async function updateNurse(req, res) {
  try {
    const {
      full_name,
      gender,
      birth_date,
      cpf,
      telephone,
      educational_institution,
      cofen_uf,
    } = req.body;

    if (!full_name || !birth_date || !educational_institution || !cofen_uf) {
      return res.status(400).json({
        message:
          "Nome,data de nascimento, Instituição de Ensino e cadastro do COFEN/UF são obrigatórios",
      });
    }

    const nurseInDatabase = await Nurse.findByPk(req.params.id);

    if (!nurseInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    nurseInDatabase.full_name = full_name || nurseInDatabase.full_name;
    nurseInDatabase.gender = gender;
    nurseInDatabase.birth_date = birth_date || nurseInDatabase.birth_date;
    nurseInDatabase.cpf = cpf;
    nurseInDatabase.telephone = telephone;
    nurseInDatabase.educational_institution =
      educational_institution || nurseInDatabase.educational_institution;
    nurseInDatabase.cofen_uf = cofen_uf || nurseInDatabase.cofen_uf;

    nurseInDatabase.save();
    res.status(200).json(nurseInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = updateNurse;
