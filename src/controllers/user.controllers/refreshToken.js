import _jwt from "../../functions/jsonwebToken.js"
export default async function refreshToken(req, res) {
  const token = await _jwt.generateToken(req.user)
  res.status(200).send(token)
}
