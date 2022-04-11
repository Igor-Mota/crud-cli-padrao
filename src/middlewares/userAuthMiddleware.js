import _jwt from "../functions/jsonwebToken.js"

export default async function userAuthMiddleware(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) return res.status(403).send()

  const isValidUserToken = await _jwt.verifyToken(authorization)

  if (!isValidUserToken) return res.status(403).send("unauthorized")

  const user = {
    id: isValidUserToken.id,
    email: isValidUserToken.email,
    username: isValidUserToken.username,
  }
  req.user = user
  next()
}
