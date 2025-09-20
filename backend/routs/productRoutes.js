import express from "express"
import Product from '../model/productModel.js'
import {getProdcut, getProdcutById,createProduct} from '../controllers/productController.js'
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route('/').get(getProdcut).post(protect,admin,createProduct);
router.route('/:id').get(getProdcutById);


export default router