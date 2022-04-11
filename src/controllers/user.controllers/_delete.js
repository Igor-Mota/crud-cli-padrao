import UserEntitie from "../../entities/user.entitie/index.js"
export default async function _delete(req, res) {
  const { id } = req.params

  const deleted = await UserEntitie._delete(id)
  if (!deleted.rowsAfected) return res.status(403)
  return res.status(201).send()
}
