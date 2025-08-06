import express from "express"
import Product from '../model/productModel.js'
import {getProdcut, getProdcutById} from '../controllers/productController.js'
const router = express.Router();

router.route('/').get(getProdcut);
router.route('/:id').get(getProdcutById);

export default router