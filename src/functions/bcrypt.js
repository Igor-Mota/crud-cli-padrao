import { asyncGenSalt, asyncHash, asyncCompareHash } from "./promisses.js"

const _bcrypt = {
  async generateHash(string) {
    const salts = await asyncGenSalt(parseInt(process.env.SALT_ROUNDS))

    const hashValue = await asyncHash(string, salts)

    return hashValue
  },
  async compareHash(hash, password) {
    const isCorrectPassowrd = await asyncCompareHash(password, hash)
    return isCorrectPassowrd
  },
}
export default _bcrypt
