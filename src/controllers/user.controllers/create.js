import _bcrypt from "../../functions/bcrypt.js"
import _jwt from "../../functions/jsonwebToken.js"
import UserEntitie from "../../entities/user.entitie/index.js"

import reducePassword from "../../utils/reducePassword.js"

export default async function create(req, res) {
  const { email, username, password } = req.body

  const hashedPassword = await _bcrypt.generateHash(password)

  const user = await UserEntitie.create({
    email,
    username,
    password: hashedPassword,
  })

  // remove this condition if password is not returned
  const userRender = reducePassword(user)
  //Remove up

  const token = await _jwt.generateToken({
    id: user.id,
    email: user.email,
    username: user.username,
  })

  res.status(200).json({ user: userRender, token })
}
