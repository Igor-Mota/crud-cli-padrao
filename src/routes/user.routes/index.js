import routerGroup from "moriarty-express-router-group"
import { userController } from "../../controllers/user.controllers/index.js"
import { userValidations } from "../../validations/index.js"
import userAuthMiddleware from "../../middlewares/userAuthMiddleware.js"

routerGroup.set({
  method: "post",
  prefix: "/signin",
  controller: userController.create,
  middleware: [userValidations.createUserValidation],
})

routerGroup.set({
  method: "post",
  prefix: "/login",
  controller: userController.login,
  middleware: [userValidations.loginUserValidation],
})

routerGroup.middleware(userAuthMiddleware)

routerGroup.set({
  method: "get",
  prefix: "/refreshToken",
  controller: userController.refreshToken,
})

routerGroup.set({
  method: "get",
  prefix: "/find/:id",
  controller: userController.get,
})

routerGroup.set({
  method: "put",
  prefix: "/update/:id",
  controller: userController.update,
})

routerGroup.set({
  method: "delete",
  prefix: "/delete/:id",
  controller: userController._delete,
})

export default routerGroup.get()
