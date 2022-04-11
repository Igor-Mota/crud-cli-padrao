import dotEnv from "dotEnv"
import { configUse, configSet } from "./configs.js"

export default function config(server) {
  dotEnv.config()

  configUse.forEach((config) => {
    if (!config.params || config.params === "") {
      return server.use(config.configFunc())
    }
    server.use(config.configFunc(...config.params))
  })
  configSet.forEach((config) => {
    if (!config.params || config.params === "") {
      return server.use(config.configFunc())
    }
    server.use(config.configFunc(...config.params))
  })
}
