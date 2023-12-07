const bcrypt = require("bcrypt");
const User = require("../../models/userSchema");

const createUser = async (Data) => {
	try {
		const user = await User.findOne({
			email: Data.email,
		});
		if (user) {
			return;
		}

		const salt = await bcrypt.genSalt(10);
		Data.password = await bcrypt.hash(Data.password, salt);

		const createUser = await User.create(Data);
		return createUser;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createUser,
};
