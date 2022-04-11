import { promisify } from "util"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const asycSign = promisify(jwt.sign)
export const asyncHash = promisify(bcrypt.hash)
export const asyncGenSalt = promisify(bcrypt.genSalt)
export const asyncCompareHash = promisify(bcrypt.compare)
