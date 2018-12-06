

let mongooes = require("mongoose");

mongooes.connect('mongodb://localhost/FoodDB');// { useNewUrlParser: true }
let db = mongooes.connection;

db.on('error', ()=>{
    console.log('error connect')
  });
db.once("open", function(){
    console.log('connected')
  })
  
db.once("close", function(){
    console.log('disconnected')
  })
  
let Schema = mongooes.Schema;
let foodSchema = new Schema({
    Food_Name: String,
    Buy_Date:Date,
    Expired_date:String,
    best_before_date: String,
    Food_type : String,
    Isexpired :{type: Boolean,
      default: false},
  })
  
  
let FoodModel = mongooes.model('data_set', foodSchema)
  

var check_expired = function(){
    
var convert_existing_date = function(time = null)
{
    if (time == null)
    {
        var time1 = new Date();
    time = time1.toString().replace(/-/g,':').replace('T',':');
    time = time.split(' ');
    }
    else
    {
    time = time.split(' ');
    console.log(time)
    }
    
if(time[0]=="Sun")
{
    time[0] = "7";
}
else if (time[0]=="Mon")
{
    time[0] = "1";
}
else if (time[0]=="Tue")
{
    time[0] = "2";
}
else if (time[0]=="Wed")
{
    time[0] = "3";
}
else if (time[0]=="Thu")
{
    time[0] = "4";
}
else if (time[0]=="Fri")
{
    time[0] = "5";
}
else if (time[0]=="Sat")
{
    time[0] = "6";
}
if(time[1]=="Jan")
{
    time[1] = "1";
} 
else if (time[1]=="Feb")
{
    time[1]="2";
}
else if (time[1]=="Mar")
{
    time[1]="3";
}
else if (time[1]=="Apr")
{
    time[1]="4";
}
else if (time[1]=="May")
{
    time[1]="5";
}
else if (time[1]=="Jun")
{
    time[1]="6";
}
else if (time[1]=="Jul")
{
    time[1]="7";
}
else if (time[1]=="Aug")
{
    time[1]="8";
}
else if (time[1]=="Sep")
{
    time[1]="9";
}
else if (time[1]=="Oct")
{
    time[1]="10";
}
else if (time[1]=="Nov")
{
    time[1]="11";
}
else if (time[1]=="Dec")
{
    console.log("555")
    time[1]="12";
}
return time;
}
// existing time  time[0] = week
//                time[1] = month
//                time[2] = day
//                time[3] = year
var existing_date = convert_existing_date()

FoodModel.find({ }, function (err, docs) {
    //var i;
    console.log(docs)
    var Isexpired = 0;
   for (i = 0 ;i<docs.length; i++ )
   {
       var dataTime = String(docs[i].Expired_date)
       var data_date = convert_existing_date(dataTime)
       if (data_date[3] <= existing_date[3])
       {
        if (data_date[1] <= existing_date[1])
        {
            if (data_date[2] <= existing_date[2])
       {
           Isexpired = String(docs[i]._id)
           FoodModel.findOneAndUpdate({_id:Isexpired},{ Isexpired: true },{ returnOriginal: false }, function (err, expried_data) {
                console.log("found one expried")
           })
       }
        }
       }

   }
   for (i = 0 ;i<docs.length; i++ )
   {
       var dataTime = String(docs[i].best_before_date)
       var data_date = convert_existing_date(dataTime)
       if (data_date[3] <= existing_date[3])
       {
        if (data_date[1] <= existing_date[1])
        {
            if (data_date[2] <= existing_date[2])
       {
           Isexpired = String(docs[i]._id)
           FoodModel.findOneAndUpdate({_id:Isexpired},{ Isexpired: true },{ returnOriginal: false }, function (err, expried_data) {
                console.log("found one expried")
           })
       }
        }
       }

   }
   
}

);
}

module.exports = check_expired;
