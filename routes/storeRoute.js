import express from "express"
import { showProducts } from "../controllers/storeController.js";

const storeRouter = express.Router();               // 

storeRouter.get("/",showProducts);              //trying to get the showProducts when hit the "/"   -->> go to storeControllers

export {storeRouter};