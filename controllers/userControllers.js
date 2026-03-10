import { userModel } from "../models/userModel.js";

const getUsers = async (req,resp)=>{
    const users = await userModel.find();
    resp.render("users/index",{users});
};

const addUserForm = async (req,resp)=>{
    resp.render("users/add");
};

const addUsers = async (req,resp)=>{
    const user =  req.body;
    await userModel.create(user);
    resp.redirect("/users");
};

const editUserForm = async (req,resp)=>{
    const id = req.params.id;
    const user = await userModel.findById(id);
    resp.render("users/edit",{user});
};

const saveUsers = async (req,resp)=>{
    const id = req.params.id;
    await userModel.findByIdAndUpdate(id,req.body);
    resp.redirect("/users");
};

const deleteUser = async (req,resp)=>{
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    resp.redirect("/users");
};

export {getUsers,addUserForm,addUsers,editUserForm,saveUsers,deleteUser};