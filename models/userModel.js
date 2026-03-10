import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},   //(user/admin)
});

const userModel = mongoose.model("users",userSchema);

// db.users.insertMany([{name:"user 1",email:"user1@gmail.com",password:"user1@1234",role:"backend_Dev"},
// |     {name:"user 2",email:"user2@gmail.com",password:"user2@1234",role:"frontend_Dev"},
// |     {name:"user 4",email:"user4@gmail.com",password:"user4@1234",role:"MERN_Dev"},
// |     {name:"user 3",email:"user3@gmail.com",password:"user3@1234",role:"FullStack_Dev"},
// | ])

export {userModel};