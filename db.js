const mongoose = require("mongoose");
var mongoURL='mongodb+srv://Shreyas:mishra@cluster0.qk7ln.mongodb.net/mern-pizza'
mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true});
var db=mongoose.connection;
db.on('connected',()=>{ 
    console.log('Mongo DB ');
})
db.on('error',()=>{
    console.log('Some error');
})
module.exports=mongoose