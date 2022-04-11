import { body } from "express-validator"

export const createUserValidation = (cb) => [
  body("email", "is value shold be a email").isEmail(),
  body("password", "invalid password").isLength({ min: 6 }),
  body("username", "invalid username").isLength({ min: 3 }),
  (req, res, next) => cb(req, res, next),
]
export const loginUserValidation = (cb) => [
  body("email", "is value shold be a email").isEmail(),
  body("password", "invalid password").isLength({ min: 6 }),
  (req, res, next) => cb(req, res, next),
]
export const updateUserValidation = (cb) => [
  body("email", "is value shold be a email").isEmail(),
  body("password", "invalid password").isLength({ min: 6 }),
  (req, res, next) => cb(req, res, next),
]
