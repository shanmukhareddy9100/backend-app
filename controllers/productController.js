import productModel from "../models/productModel.js";

const getProducts =async (req,resp) => {
    const products = await productModel.find();
    resp.render("products/index",{products});
};

const addProducts = async (req,resp)=>{
    const product = req.body;
    await productModel.create(product);
    resp.redirect("/products");
}

const addProductForm = async(req,resp)=>{
    resp.render("products/add");
}
const deleteProducts = async(req,resp)=>{
    const id=req.params.id;
    await productModel.findByIdAndDelete(id);
    resp.redirect("/products");
}

const saveProducts = async (req,resp)=>{
    const id = req.params.id;
    await productModel.findByIdAndUpdate(id,req.body);
    resp.redirect("/products");
}

const editProductForm = async(req,resp)=>{
    const id = req.params.id;
    const product = await productModel.findOne({_id:id});
    resp.render("products/edit",{product});
}

export {getProducts,addProducts,addProductForm,deleteProducts,saveProducts,editProductForm};