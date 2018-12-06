var createError = require('http-errors');
var express = require('express');
var path = require('path');
//let url = require('url');
//  let mongooes = require("mongoose");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

var app = express();
/*
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
    Buy_Date:String,
    Expired_date:String,
    best_before_date: String,
    Food_type : String,
  })
  
  
let FoodModel = mongooes.model('data_set', foodSchema)
  */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/FoodData', indexRouter);
app.use('/input', indexRouter);
app.use('/', indexRouter);
app.use('/inputed', indexRouter);
app.use('/show', indexRouter);

/*
app.get('/FoodData', (req, res) => {
  let myURL = url.parse(req.url,true);
  let queryOBJ = myURL.query;
  Console.log(queryOBJ);
  let Food_Name = queryOBJ.Food_Name;
  let Buy_Date = queryOBJ.Buy_Date;
  let Expired_date = queryOBJ.Expired_date;
  let best_before_date = queryOBJ.best_before_date;
  let Food_type = queryOBJ.Food_type;



  FoodModel.create({
      Food_Name: Food_Name,
      Buy_Date:Buy_Date,
      Expired_date:Expired_date,
      best_before_date:best_before_date,
      Food_type:Food_type,},
      (err) => {
          if (!err){
              console.log("create success");
          }
          else
          {
              throw err;
          }
      }
  );
  res.send('input_sucess')
  
 })
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
