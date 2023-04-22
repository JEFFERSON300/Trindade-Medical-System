const MedicalCare = require("../models/medicalCare");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

async function medicalCare(req, res) {
  try {
    const { doctor_id, patient_id } = req.body;

    if (!patient_id || !doctor_id) {
      return res
        .status(400)
        .json({ message: "id do médico e do paciente são obrigatórios" });
    }

    const doctorInDatabase = await Doctor.findByPk(doctor_id);
    const patientInDatabase = await Patient.findByPk(patient_id);

    if (!doctorInDatabase || !patientInDatabase) {
      return res
        .status(404)
        .json({ message: "id do paciente e/ou médico são inválidos" });
    }

    const newMedicalCare = {
      doctor_id: doctor_id,
      patient_id: patient_id,
    };

    const resultMedicalCare = await MedicalCare.create(newMedicalCare);

    doctorInDatabase.full_service_carried_out += 1;
    doctorInDatabase.save();

    patientInDatabase.full_service += 1;
    patientInDatabase.service_status = "ATENDIDO";
    patientInDatabase.save();

    res.status(201).json(resultMedicalCare);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = medicalCare;
