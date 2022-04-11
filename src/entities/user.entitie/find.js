import users from "../../../usersInMemory.js"
export default async function find(_id) {
  users.map((user) => (user.active === true ? user : null))
}
