const  mongoose =require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        age:{
            type:Number,
            required:true,
            min:1,
            max:110
        }
    },
    {
        timestamps:true
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = {Post};