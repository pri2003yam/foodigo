const mongoose = require('mongoose');
const mongoURI="mongodb+srv://Foodigo:Priyam2003@cluster0.3b72bkb.mongodb.net/Foodigo?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB = async() => {
   await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{

    if(err) console.log("---",err)
    else{
        console.log("connected successfully.");
        const fetched_data=await mongoose.connection.db.collection("food_item");  
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log();
        })
    }
    });

}


module.exports=mongoDB;


