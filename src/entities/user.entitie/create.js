import users from "../../../usersInMemory.js"
export default async function create(payload) {
  const user = {
    id: Math.floor(Math.random() * 1000),
    ...payload,
    createdAt: Date.now(),
    updateddAt: Date.now(),
    active: true,
  }
  users.push(user)
  return user
}
