import { validationResult } from "express-validator"
import {
  createUserValidation,
  loginUserValidation,
  updateUserValidation,
} from "./validatons.js"

function returnErrors(req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  next()
}

export default {
  createUserValidation: createUserValidation(returnErrors),
  loginUserValidation: loginUserValidation(returnErrors),
  updateUserValidation: updateUserValidation(returnErrors),
}
