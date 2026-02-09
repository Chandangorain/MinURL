const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({  // making a schema which has shortID,redirctURL,visithistory
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,

    },
    visitHistory:[{Timestamp:{type:Number}}],
},
{timestamps:true}
);

const URL=mongoose.model("url",urlSchema);
module.exports=URL;