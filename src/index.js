import express from "express"
import app from "./app.js"

const server = express()
app(server)

server.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port " + process.env.PORT || 4000)
})
