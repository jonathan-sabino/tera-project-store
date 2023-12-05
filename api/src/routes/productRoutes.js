import express from "express";
const router = express.Router();

import controllers from "../controllers/productController.js";
import authController from "../controllers/authController.js";

router.get("/", controllers.getAll);
router.get("/:id", controllers.getProductById);
router.post("/", authController.tokenVerifyAdmin, controllers.createProduct);
router.patch(
	"/:id",
	authController.tokenVerifyAdmin,
	controllers.updateProduct
);
router.delete(
	"/:id",
	authController.tokenVerifyAdmin,
	controllers.deleteProduct
);

export default router;
