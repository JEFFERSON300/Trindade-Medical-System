const Patient = require("../../models/patient");

async function updatePatient(req, res) {
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
    } = req.body;

    if (!full_name || !birth_date || !emergency_contact) {
      return res.status(400).json({
        message:
          "Nome,data de nascimento e contato de emergencia são obrigatórios",
      });
    }

    const patientinDatabase = await Patient.findByPk(req.params.id);

    if (!patientinDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    patientinDatabase.full_name = full_name || patientinDatabase.full_name;
    patientinDatabase.gender = gender;
    patientinDatabase.birth_date = birth_date || patientinDatabase.birth_date;
    patientinDatabase.cpf = cpf;
    patientinDatabase.telephone = telephone;
    patientinDatabase.emergency_contact =
      emergency_contact || patientinDatabase.emergency_contact;
    patientinDatabase.list_of_allergies = list_of_allergies;
    patientinDatabase.list_of_specific_care = list_of_specific_care;
    patientinDatabase.health_insurance = health_insurance;

    patientinDatabase.save();
    res.status(200).json(patientinDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = updatePatient;
