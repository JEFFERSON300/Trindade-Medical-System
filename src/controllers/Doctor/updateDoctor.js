const Doctor = require("../../models/doctor");

async function updateDoctor(req, res) {
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

    const doctorInDatabase = await Doctor.findByPk(req.params.id);

    if (!doctorInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    doctorInDatabase.full_name = full_name || doctorInDatabase.full_name;
    doctorInDatabase.gender = gender;
    doctorInDatabase.birth_date = birth_date || doctorInDatabase.birth_date;
    doctorInDatabase.cpf = cpf;
    doctorInDatabase.telephone = telephone;
    doctorInDatabase.educational_institution =
      educational_institution || doctorInDatabase.educational_institution;
    doctorInDatabase.crm_uf = crm_uf || doctorInDatabase.crm_uf;
    doctorInDatabase.clinical_specialization =
      clinical_specialization || doctorInDatabase.clinical_specialization;

    doctorInDatabase.save();
    res.status(200).json(doctorInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = updateDoctor;
