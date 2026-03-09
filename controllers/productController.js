import productModel from "../models/productModel.js";

const showProducts = (req,resp) => {
    req.render("home",{productModel});
}

export {showProducts};