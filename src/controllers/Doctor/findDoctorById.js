const Doctor = require("../../models/doctor");

async function findDoctorById(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.params.id);

    if (!doctorInDatabase) {
      return res.status(404).json({ message: "Não existe item com esse id" });
    }

    res.status(200).json(doctorInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findDoctorById;
