const joi = require("joi");

const userJoiValidations = (body) => {
	const Schema = joi.object({
		name: joi.string().require(),
		email: joi.string().email().required(),
		password: joi.string().required(),
	});
	return Schema.validate(body);
};

module.exports = {
	userJoiValidations,
};
