const express = require("express");
const category = require("../controller/categoryController");
const tag = require("../controller/tagController");
const product = require("../controller/productController");
const router = express.Router()

router.get('/category',category.list)
router.post('/category',category.add)
router.patch('/category',category.delete)
router.put('/category',category.update)

router.get('/tag',tag.list)
router.post('/tag',tag.add)
router.patch('/tag',tag.delete)
router.put('/tag',tag.update)

router.get('/product',product.list)
router.post('/product',product.add)
router.patch('/product',product.delete)
router.put('/product',product.update)


module.exports = router