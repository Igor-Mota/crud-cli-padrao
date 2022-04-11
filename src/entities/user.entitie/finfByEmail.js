import users from "../../../usersInMemory.js"
export default async function findByEmail(email) {
  const user = users.map((user) => {
    if (user.email === email) return user
  })
  return user[0]
}
