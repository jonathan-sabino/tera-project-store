import express from "express";
const router = express.Router();

import controllers from "../controllers/productController.js";

router.get("/", controllers.getAll);
router.post("/", controllers.createProduct);
router.patch("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);

export default router;
