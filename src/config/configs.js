import cors from "cors"
import { resolve } from "path"
import { cwd } from "process"

import express from "express"

export const configUse = [
  {
    configFunc: express.json,
  },
  {
    configFunc: cors,
    params: ["*"],
  },
]

export const configSet = [
  {
    configFunc: express.static,
    params: [resolve(cwd(), "public")],
  },
]
