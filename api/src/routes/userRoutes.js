import express from "express";
const router = express.Router();

import controllers from "../controllers/userController.js";
import authController from "../controllers/authController.js";

router.get("/", authController.tokenVerifyAdmin, controllers.getAll);
router.post("/", controllers.createUser);
router.patch("/:id", authController.tokenVerify, controllers.updateUser);
router.delete(
	"/:id",
	authController.tokenVerify,
	authController.tokenVerifyAdmin,
	controllers.deleteUser
);

router.post("/login", authController.login);
router.post(
	"/authenticatedUser",
	authController.tokenVerify,
	controllers.authenticatedUser
);
export default router;
