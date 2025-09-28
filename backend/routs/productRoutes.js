import express from "express"
import Product from '../model/productModel.js'
import {getProdcut, getProdcutById,createProduct,updateProduct,deleteProduct,createProductReview} from '../controllers/productController.js'

import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route('/').get(getProdcut).post(protect,admin,createProduct);
router.route('/:id').get(getProdcutById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
router.route('/:id/reviews').post(protect,createProductReview)


export default router