const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
});
// export ese kara ki todo ke naam se use kar sakta hai koi aur todoschema ko
module.exports=mongoose.model("Todo",todoSchema); 
