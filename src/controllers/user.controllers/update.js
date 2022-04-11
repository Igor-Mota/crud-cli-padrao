import UserEntitie from "../../entities/user.entitie/index.js"

export default async function update(req, res) {
  const { id } = req.params

  const user = await UserEntitie.update(id, req.body)

  if (!user) return res.status(403).send()

  return res.status(200).send(user)
}
