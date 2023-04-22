const Doctor = require("../../models/doctor");

async function findDoctors(req, res) {
  try {
    if (req.query.status) {
      const searchDoctors = await Doctor.findAll({
        where: { system_status: req.query.status },
      });

      return res.status(200).json(searchDoctors);
    }

    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
}

module.exports = findDoctors;
