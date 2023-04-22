const Nurse = require("../../models/nurse");

async function createNurse(req, res) {
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

    // Verificando se a informação já existe no BD
    const nurseDB = await Nurse.findOne({ where: { cpf: cpf } });

    if (nurseDB) {
      return res
        .status(409)
        .json({ message: "Já existe um enfermeiro com esse CPF" });
    }

    const newNurse = {
      full_name: full_name,
      gender: gender,
      birth_date: birth_date,
      cpf: cpf,
      telephone: telephone,
      educational_institution: educational_institution,
      cofen_uf: cofen_uf,
    };

    // Adicionado elementos no banco de dados
    const nurseRecord = await Nurse.create(newNurse);
    res.status(201).json(nurseRecord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = createNurse;
