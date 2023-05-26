const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.getPatients = async (req, res) => {
	const patients = await User.find({ role: 'patient' });
	res.json(patients);
};