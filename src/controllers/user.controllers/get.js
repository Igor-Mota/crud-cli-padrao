import UserEntitie from "../../entities/user.entitie/index.js"
import reducePassword from "../../utils/reducePassword.js"
export default async function get(req, res) {
  const { id } = req.params

  const user = await UserEntitie.findById(id)

  if (!user) return res.status(404).send("user not found")

  const userForRender = reducePassword(user)

  res.status(200).send(userForRender)
}
