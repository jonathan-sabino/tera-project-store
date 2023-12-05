import express from "express";
const router = express.Router();

import controllers from "../controllers/orderController.js";
import authController from "../controllers/authController.js";

router.get("/", authController.tokenVerifyAdmin, controllers.getAll);
router.get(
	"/find/:userId",
	authController.tokenVerifyAdmin,
	authController.tokenVerify,
	controllers.getOrderById
);
router.get(
	"/income",
	authController.tokenVerifyAdmin,
	controllers.getMonthlyIncome
);
router.post("/", authController.tokenVerify, controllers.createOrder);
router.patch("/:id", authController.tokenVerify, controllers.updateOrder);
router.delete(
	"/:id",
	authController.tokenVerifyAdmin,
	authController.tokenVerify,
	controllers.deleteOrder
);
