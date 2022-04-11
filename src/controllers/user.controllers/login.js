import _bcrypt from "../../functions/bcrypt.js"
import _jwt from "../../functions/jsonwebToken.js"
import UserEntitie from "../../entities/user.entitie/index.js"
import reducePassword from "../../utils/reducePassword.js"

export default async function login(req, res) {
  const { email, password } = req.body

  const user = await UserEntitie.findByEmail(email)

  if (!user) return res.status(404).send("user not found")

  const isCorrectPassword = await _bcrypt.compareHash(user.password, password)

  if (!isCorrectPassword) return res.status(403).send()

  const userRender = reducePassword(user)

  const token = await _jwt.generateToken({
    id: user.id,
    email: user.email,
    username: user.username,
  })

  res.status(200).json({ user: userRender, token })
}
