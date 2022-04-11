import users from "../../../usersInMemory.js"
export default async function update(payload) {
  const id = parseInt(payload.id)

  const user = users.map((user) => {
    if (user.id === id) {
      for (var key in user) {
        user[key] = payload[key]
      }
      return user
    }
  })

  return user[0]
}
