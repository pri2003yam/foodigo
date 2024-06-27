const mongoose = require('mongoose');
const mongoURI="mongodb+srv://Foodigo:Priyam2003@cluster0.3b72bkb.mongodb.net/Foodigo?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB = async() => {
   await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{

    if(err) console.log("---",err)
    else{
        console.log("connected successfully.");
        const fetched_data=await mongoose.connection.db.collection("food_item");  
        fetched_data.find({}).toArray(async function(err,data){

            const foodCategory=await mongoose.connection.db.collection("foodCategory");
            foodCategory.find ({}).toArray(function(err,catData){
                if(err) console.log(err);
               else {
                  global.food_item= data;
                  global.foodCategory= catData;
               }
            }) 
            // if(err) console.log(err);
            // else {
            //     global.food_item= data;
            // }
        })
    }
    });

}


module.exports=mongoDB;


