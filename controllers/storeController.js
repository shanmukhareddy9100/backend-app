import productModel from "../models/productModel.js";

const showProducts = async (req,resp)=> {
    const products = await productModel.find();
    // resp.render("store/products",{products});              //rendering the products by sending the productModel to products.ejs --->> go to productModel to check product 
    resp.json(products);
}

export {showProducts};