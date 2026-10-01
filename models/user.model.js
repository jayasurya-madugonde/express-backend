const  mongoose =require('mongoose');
const  bcrypt =require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            minLength:1,
            maxLength: 100,
            unique:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            minLength:6,
            maxLength: 50,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            minLength:6,
            maxLength:50,
            lowercase:true
        }
    },
    {
        timestamps:true 
    }    
      
);

//before saving any password , we need to hash it
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next;
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

module.exports = { User: mongoose.model("User", userSchema) };