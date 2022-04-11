import { Router } from "express"

export default function reducePassword(payload) {
  let payloadRender = {}
  if (payload.password) {
    for (var key in payload) {
      if (key !== "password")
        payloadRender = { ...payloadRender, [key]: payload[key] }
    }
  }
  return payloadRender
}
