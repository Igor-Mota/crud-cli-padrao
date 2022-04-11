import users from "../../../usersInMemory.js"
export default async function findById(_id) {
  const id = parseInt(_id)

  const user = users.map((user) => {
    if (user.id === id) return user
  })

  return user[0]
}
