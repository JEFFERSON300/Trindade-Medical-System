const Patient = require("../../models/patient");

async function createPatient(req, res) {
  try {
    const {
      full_name,
      gender,
      birth_date,
      cpf,
      telephone,
      emergency_contact,
      list_of_allergies,
      list_of_specific_care,
      health_insurance,
      service_status,
    } = req.body;

    if (!full_name || !birth_date || !emergency_contact) {
      return res.status(400).json({
        message:
          "Nome,data de nascimento e contato de emergencia são obrigatórios",
      });
    }

    // Verificando se a informação já existe no BD
    const patientDB = await Patient.findOne({ where: { cpf: cpf } });

    if (patientDB) {
      return res
        .status(409)
        .json({ message: "Já existe um paciente com esse CPF" });
    }

    const newPatient = {
      full_name: full_name,
      gender: gender,
      birth_date: birth_date,
      cpf: cpf,
      telephone: telephone,
      emergency_contact: emergency_contact,
      list_of_allergies: list_of_allergies,
      list_of_specific_care: list_of_specific_care,
      health_insurance: health_insurance,
      service_status: service_status,
    };

    // Adicionado elementos no banco de dados
    const patientRecord = await Patient.create(newPatient);
    res.status(201).json(patientRecord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = createPatient;
