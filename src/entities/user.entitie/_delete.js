import users from "../../../usersInMemory.js"
export default async function _delete(_id) {
  const id = parseInt(_id)

  const user = users.map((user) => {
    if (user.id === id) {
      user.active = false
      return user
    }
  })
  return user ? { rowsAfected: 1 } : null
}
