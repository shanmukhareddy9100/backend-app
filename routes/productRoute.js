import { getProducts,addProducts,addProductForm,deleteProducts,editProductForm,saveProducts } from "../controllers/productController.js";
import express from "express"

const productRouter = express.Router();
productRouter.get("/",getProducts);
productRouter.get("/add",addProductForm);
productRouter.post("/add",addProducts);
productRouter.get("/:id/delete",deleteProducts);
productRouter.get("/:id/edit",editProductForm);
productRouter.post("/:id/save",saveProducts);

export {productRouter};