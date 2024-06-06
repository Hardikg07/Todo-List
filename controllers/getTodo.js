const Todo=require("../models/Todo");
exports.getTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Successfully'
        }
    );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
exports.getTodoById=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data with given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"todo id data found"
        }
    );
        
       
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}