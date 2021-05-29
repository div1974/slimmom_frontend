import Joi from 'joi';

const registerUserSchema = Joi.object().keys({
  email: Joi.string().email({ tlds: {allow: false}, minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(24).required(),
  username: Joi.string().required(),
});

export default registerUserSchema