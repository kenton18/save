
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
    Expired_date:Date,
    best_before_date: Date,
    Food_type : String,
    Isexpired :{type: Boolean,
      default: false},
  })
  
  
let FoodModel = mongooes.model('data_set', foodSchema)

module.exports = FoodModel;