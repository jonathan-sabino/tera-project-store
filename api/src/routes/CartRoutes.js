import express from "express";
const router = express.Router();

import controllers from "../controllers/cartController.js";
import authController from "../controllers/authController.js";

router.get("/", authController.tokenVerifyAdmin, controllers.getAll);
router.get(
	"/:id",
	authController.verifyTokenAndAuthorization,
	controllers.getCartById
);
router.post("/", authController.tokenVerify, controllers.createCart);
router.patch("/:id", authController.tokenVerify, controllers.updateCart);
router.delete(
	"/:id",
	authController.verifyTokenAndAuthorization,
	controllers.deleteProduct
);
