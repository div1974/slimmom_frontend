import Joi from 'joi';

const registerUserSchema = Joi.object().keys({
  password: Joi.string().min(6).max(24).required(),
  email: Joi.string().email({ tlds: {allow: false}, minDomainSegments: 2 }).required(),
});

export default registerUserSchema