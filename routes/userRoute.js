import { getUsers,addUserForm,addUsers,editUserForm,saveUsers, deleteUser } from "../controllers/userControllers.js";
import express from "express";

const userRouter = express.Router();

userRouter.get("/",getUsers);
userRouter.get("/add",addUserForm);
userRouter.post("/add",addUsers);
userRouter.get("/:id/edit",editUserForm);
userRouter.post("/:id/save",saveUsers);
userRouter.get("/:id/delete",deleteUser);

export {userRouter};