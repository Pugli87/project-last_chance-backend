// controllers/authController.js
const { logoutUser: service } = require("../../service");
//const User = require("../../models/userSchema");

const logout = async (req, res) => {
	/*	try {
		const { success, result, message } = await service.logout(req.user._id);
		console.log("result:", result);
		console.log("success:", success);
		if (!success) {
			return res.status(401).json({
				result,
				message,
			});
		}

		return res.status(204).end();
	} catch (error) {
		console.log("error:", error);
		return res.status(500).json({
			result: null,
			message: error,
		});
	}*/

	try {
		await User.findOneAndUpdate(
			{ _id },
			{ $set: { token: null } },
			{ new: true }
		);

		return {
			success: true,
			result: {},
			message: "",
		};
	} catch (error) {
		return {
			success: false,
			result: null,
			message: error,
		};
	}
};
module.exports = {
	logout,
};
