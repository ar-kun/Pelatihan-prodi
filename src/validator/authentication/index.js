const { RegisterPayloadSchema, LoginPayloadSchema } = require('./schema');

const AuthenticationValidator = {
 validateRegisterPayload: (payload) => {
  const validationResult = RegisterPayloadSchema.validate(payload);
  if (validationResult.error) {
   throw new NotFoundError(validationResult.error.message);
  }
 },
 validateLoginPayload: (payload) => {
  const validationResult = LoginPayloadSchema.validate(payload);
  if (validationResult.error) {
   throw new NotFoundError(validationResult.error.message);
  }
 },
};

module.exports = AuthenticationValidator;
