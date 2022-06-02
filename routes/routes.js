// import express
import express from "express";
 
// import function from controller
import { showProducts, showLastGelsUpdate, showGelById,showGelNumber,showGelByMonth,showGelByIdAndMonth } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/products', showProducts);
 
// Get Single Product
router.get('/lastGelsUpdate', showLastGelsUpdate);

router.get('/listByGelId/:idGel', showGelById);

router.get('/listByGelMonth/:month', showGelByMonth);

router.get('/listByGelIdAndMonth/:idGel?/:month?', showGelByIdAndMonth);

router.get('/gelNumber',showGelNumber);
 
// export default router
export default router;