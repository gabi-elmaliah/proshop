import express from "express"
import Product from '../model/productModel.js'
import {getProduct, getProdcutById,createProduct,updateProduct,deleteProduct,createProductReview,getTopProducts} from '../controllers/productController.js'

import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route('/').get(getProduct).post(protect,admin,createProduct);
router.route('/top').get(getTopProducts);
router.route('/:id').get(getProdcutById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
router.route('/:id/reviews').post(protect,createProductReview)


export default router