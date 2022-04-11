import { asycSign } from "./promisses.js"
import jwt from "jsonwebtoken"
const _jwt = {
  async generateToken(payload) {
    const token = await asycSign(payload, process.env.SECRET)
    return token
  },
  async verifyToken(token) {
    const removeBearer = token.split(" ")
    const isValidUserToken = jwt.verify(
      removeBearer[1],
      process.env.SECRET,
      (err, done) => {
        return err ? false : done
      }
    )
    return isValidUserToken
  },
}
export default _jwt
