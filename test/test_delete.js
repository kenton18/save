//Describe tests
var mocha = require('mocha');
var assert = require('assert');
var FoodModel = require('../test_DB');
let mongooes = require("mongoose");
var food;

    // Create a food that ready for delete
    before(function(){
         food = new FoodModel ({
            Food_Name: 'Orange',
        });
        food.save();
    });

describe('Delete Record', function() {
    this.timeout(0);
    it('Deletes one record from MongoDB', function (done) {
       FoodModel.findOneAndDelete({
            Food_Name: 'Orange',
        }, function(result){

            FoodModel.find({
                Food_Name: 'Orange',
            }, function(err, result){
                console.log(result)
                console.log(typeof(result))
                if(result.length) {
                    assert(false);
                    
                }
                done();
                
            })
        })
        
    });
});
