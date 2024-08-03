import express from "express";
const router = express.Router();

// Using APIs
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";

// Barrier to prevent unauthorized access
// Checkout the method ,APIs and endpoints
router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
router
  .route("/:categoryId")
  .delete(authenticate, authorizeAdmin, removeCategory);
router.route("/categories").get(listCategory);
router.route("/:id").get(readCategory);

export default router;
