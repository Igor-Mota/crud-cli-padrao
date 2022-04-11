import config from "./config/index.js"
import routes from "./routes/index.js"
export default function app(server) {
  config(server)
  routes.forEach((route) => {
    server.use(route)
  })
}
