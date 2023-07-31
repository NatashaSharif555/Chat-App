const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName : {type:String, trim:true},
    isGroupChat : {type:Boolean,default:false},
    users:[{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User"
    }],
    latestMessage:{
        type:mongoose.Schema.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    -8
},{
    TimeStamps:true,
})  
const Chat = mongoose.model("Chat",chatModel);
module.exports= Chat;