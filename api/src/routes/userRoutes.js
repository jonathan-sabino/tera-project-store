import express from "express";
const router = express.Router();

import controllers from "../controllers/userController.js";
import authController from "../controllers/authController.js";

router.get("/", controllers.getAll);
router.post("/", controllers.createUser);
router.patch("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

router.post("/login", authController.login);
router.post(
  "/authenticatedUser",
  authController.tokenVerify,
  controllers.authenticatedUser
);
export default router;
