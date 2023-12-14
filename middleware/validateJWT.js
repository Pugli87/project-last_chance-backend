// middlewares/validateJWT.js
const moment = require("moment");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
// const { contacts: User } = require("../models");
const { variables: V } = require("../utils");

// Remove Token Not authorized
// const updateToken = async (_id, tokenRemove) => {
//   return await User.findByIdAndUpdate(
//     { _id },
//     { $set: { token: tokenRemove } },
//     { new: true }
//   );
// };

const secureAuthentication = async (req, res, next) => {
	//   const tokenRemove = null;

	if (!req.headers.authorization) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			result: null,
			message: "Your request doesn't have authorization header",
		});
	}

	// Bearer eyJ....
	const token = req.headers.authorization.split(" ")[1];
	//   const decodedToken = jwt.decode(token);
	//   const _id = decodedToken.Id;

	try {
		const payload = jwt.verify(token, V.SECRET_KEY);
		// const user = await User.findById(payload.Id);

		// test user esto se debe eliminar y descomentar el resto de codigo.
		const user = {
			_id: "123",
			name: "John",
			email: "test@test.com",
			token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsIm5hbWUiOiJKb2huIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzAxOTM2NTM4LCJleHAiOjE3MDE5NDM3Mzh9.QsRHEYwXluh1-AxMIhCnEs0zxxswd3Xj42R_sdgCcGM", // colocar token para pruebas
		};

		// Validation time, remove expired token
		if (payload.exp <= moment().unix()) {
			//   await updateToken(_id, tokenRemove);
			return res.status(StatusCodes.UNAUTHORIZED).json({
				result: null,
				message: "Invalid token.",
			});
		}

		// User validation, removes invalid user token
		if (!user || user.token !== token) {
			//   await updateToken(_id, tokenRemove);
			return res.status(StatusCodes.UNAUTHORIZED).json({
				result: null,
				message: "Not authorized",
			});
		}

		// returns the user data identified in the token: as the user id
		req.user = payload;

		next();
	} catch (error) {
		// await updateToken(_id, tokenRemove);
		return res.status(StatusCodes.UNAUTHORIZED).json({
			result: null,
			message: "Failed to authenticate token.",
		});
	}
};

module.exports = {
	secureAuthentication,
};
