// controllers/authController.js
//const login = require("../../service/users");
const User = require("../../models/userSchema");
const logout = async (req, res) => {
	try {
		console.log("controlers");
		const user = await User.findOneAndUpdate(
			{ _id: req.user._id },
			{ $set: { token: null } },
			{ new: true }
		);

		if (!user) {
			return res.status(401).json({ message: "Not authorized" });
		}
		res.status(204).send(); // Successful response without content
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
};
module.exports = {
	logout,
};
