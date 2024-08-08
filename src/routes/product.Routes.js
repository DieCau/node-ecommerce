import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteById,
  getById,
  searchWithOptions,
  edit,
  getAllMyProducts,
} from "../controllers/product.controllers.js";
import { validateToken } from "../validators/validateToken.js";

const router = Router()

router.get("/product/:id", getById);
router.get("/product/search", searchWithOptions);
router.get("/products", validateToken, getProducts);
router.post("/product", validateToken, createProduct);
router.delete("/product/:id", validateToken, deleteById);
router.patch("/product/:id", validateToken, edit);
router.get("/products/me", validateToken, getAllMyProducts);

export default router