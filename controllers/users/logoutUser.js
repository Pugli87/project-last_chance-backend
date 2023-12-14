const service = require("../../service/users/logoutUser");
const logout = async (req, res) => {
	const { success, result, message } = await service.logout(req.user._id);

	if (!success) {
		return res.status(401).json({
			result,
			message,
		});
	}

	return res.status(204).end();
};
module.exports = {
	logout,
};
