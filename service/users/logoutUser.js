const User = require("../../models/userSchema");

const logout = async (_id) => {
	console.log("Service");
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
