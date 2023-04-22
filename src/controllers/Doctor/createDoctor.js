const Doctor = require("../../models/doctor");

async function createDoctor(req, res) {
  try {
    const {
      full_name,
      gender,
      birth_date,
      cpf,
      telephone,
      educational_institution,
      crm_uf,
      clinical_specialization,
      system_status,
    } = req.body;

    const validateClinical_specialization =
      clinical_specialization !== "CLINICO_GERAL" &&
      clinical_specialization !== "ANESTESISTA" &&
      clinical_specialization !== "DERMATALOGISTA" &&
      clinical_specialization !== "GINECOLOGISTA" &&
      clinical_specialization !== "NEUROLOGIA" &&
      clinical_specialization !== "PEDIATRIA" &&
      clinical_specialization !== "PSIQUIATRIA" &&
      clinical_specialization !== "ORTOPEDIA";

    if (
      !full_name ||
      !birth_date ||
      !educational_institution ||
      !crm_uf ||
      validateClinical_specialization
    ) {
      return res.status(400).json({
        message: "Algum dos campos obrigatórios está incorreto e/ou faltando",
      });
    }
    const doctorDB = await Doctor.findOne({ where: { cpf: cpf } });

    if (doctorDB) {
      return res
        .status(409)
        .json({ message: "Já existe um médico com esse CPF" });
    }

    const newDoctor = {
      full_name: full_name,
      gender: gender,
      birth_date: birth_date,
      cpf: cpf,
      telephone: telephone,
      educational_institution: educational_institution,
      crm_uf: crm_uf,
      clinical_specialization: clinical_specialization,
      system_status: system_status,
    };

    // Adicionado elementos no banco de dados
    const doctorRecord = await Doctor.create(newDoctor);
    res.status(201).json(doctorRecord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = createDoctor;
